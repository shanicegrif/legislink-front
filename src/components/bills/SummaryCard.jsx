import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";
import { Resend } from "resend";
import { useAuth } from "../../hooks/useAuth";

const resendKey = import.meta.env.VITE_BASE_EMAIL;

const ThumbsUpIcon = styled(FontAwesomeIcon)`
  color: #aaa; /* Default color */
  transition: color 0.3s ease; /* Smooth color transition */
  cursor: pointer;

  /* Hover effect */
  &:hover {
    color: green; /* Change color to green on hover */
  }
`;

const ThumbsDownIcon = styled(FontAwesomeIcon)`
  color: #aaa; /* Default color */
  transition: color 0.3s ease; /* Smooth color transition */
  cursor: pointer;

  /* Hover effect */
  &:hover {
    color: red; /* Change color to red on hover */
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* Align icons to the right */
  gap: 10px; /* Add space between icons */
`;

const CustomTypography = styled.div`
  font-family: "Merriweather", serif;
  font-weight: 300;
  font-style: italic;
  font-size: 13px;
`;

const CustomTypographyTwo = styled.div`
  font-family: "Merriweather", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 15px;
`;

const ListWrapper = styled.div`
  margin-top: auto; // Align the list items to the bottom of the card
`;

export default function SummaryCard({ selectedBill }) {
  const user = useAuth();
  const resend = new Resend(resendKey);

  const sendEmail = () => {
    const htmlContent = `
      <p>Dear Legislators,</p>
      <p>I am writing to express my strong support for the bill titled "<em>${selectedBill.short_title}</em>." This bill addresses an important issue that affects our community, and I believe it will have a positive impact if enacted into law.</p>
      <p>As a constituent, I urge you to consider the merits of this bill and to vote in favor of it. It represents an opportunity to make meaningful progress on [insert relevant issue or topic].</p>
      <p>Thank you for your attention to this matter.</p>
      <p>Sincerely,</p>
      <p>${user.displayName}</p>
    `;

    try {
      resend.emails.send({
        from: `${user.email}`,
        to: "shanicegriffin@pursuit.org",
        subject: `${selectedBill.short_title}`,
        html: htmlContent,
      });
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <Card
      sx={{
        width: 430,
        height: 300,
        margin: "10px",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={() => onClick(bill)} // Add onClick handler to the Card component
    >
      <CardContent>
      <IconContainer>
          <Tooltip title="Click to email rep to express support">
            <ThumbsUpIcon icon={faThumbsUp} size="lg" onClick={sendEmail} />
          </Tooltip>
          <Tooltip title="Click to email rep to express opposition">
            <ThumbsDownIcon icon={faThumbsDown} size="lg" onClick={sendEmail} />
          </Tooltip>
        </IconContainer>
        <CustomTypographyTwo variant="h6" component="div">
          {selectedBill.short_title}
        </CustomTypographyTwo>
      </CardContent>
      <ListWrapper>
        <ListItem>
          <ListItemText
            primary={`Bill Sponsor: ${selectedBill.sponsor_name} State: ${selectedBill.sponsor_state} Party: ${selectedBill.sponsor_party}`}
          />
        </ListItem>
      </ListWrapper>
    </Card>
  );
}
