import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";

const congressApi = import.meta.env.VITE_BASE_CONGRESS_API_KEY;
const serverURL = import.meta.env.VITE_BASE_URL;

const ThumbsUpIcon = styled(FontAwesomeIcon)`
  color: green; /* Default color */
  font-size: 25px;
  transition: font-size 0.3s ease; /* Smooth size transition */
  cursor: pointer;

  /* Hover effect */
  &:hover {
    font-size: 35px; /* Increase font size on hover */
  }
`;

const ThumbsDownIcon = styled(FontAwesomeIcon)`
  color: red; /* Default color */
  font-size: 25px;
  transition: font-size 0.3s ease; /* Smooth size transition */
  cursor: pointer;

  /* Hover effect */
  &:hover {
    font-size: 35px; /* Increase font size on hover */
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start; /* Align icons to the right */
  gap: 15px; /* Add space between icons */
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

const CustomListItemText = styled.div`
  font-family: "Merriweather", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
`;

const EmailSentMessage = styled.div`
  color: green;
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  margin-top: 10px; /* Add spacing from the top */
`;

export default function SummaryCard({ selectedBill, emailSent, setEmailSent }) {
  const user = useAuth();
  const [billSummary, setBillSummary] = useState("");
  async function fetchEmailToBack(body) {
    return await axios.post(`${serverURL}/email`, body);
  }

  useEffect(() => {
    console.log(selectedBill);
    axios
      .get(
        `https://api.congress.gov/v3/bill/118/${selectedBill.bill_type}/${
          selectedBill.bill_slug
            ? selectedBill.bill_slug.match(/\d+/)
            : selectedBill.bill_id.match(/\d+/)
        }/summaries?&api_key=${congressApi}&format=json`
      )
      .then((res) => {
        const summaryText = res.data.summaries[0].text;
        // Remove HTML tags from summary
        const cleanSummary = summaryText.replace(/<[^>]*>?/gm, "");
        setBillSummary(cleanSummary);
      });
  }, [selectedBill]);

  const sendEmail = (isSupportive) => {
    const htmlContent = `
        <p>Dear Legislators,</p>
        <p>I am writing to express my ${
          isSupportive ? "strong support" : "opposition"
        } for the bill titled "<em>${
      selectedBill.short_title
    }</em>." This bill addresses an important issue that affects our community, and I believe it will ${
      isSupportive ? "have a positive impact" : "have negative consequences"
    } if enacted into law.</p>
        <p>As a constituent, I urge you to consider the merits of this bill and to ${
          isSupportive ? "vote in favor of" : "oppose"
        } it. It represents an opportunity to make meaningful progress on [insert relevant issue or topic].</p>
        <p>Thank you for your attention to this matter.</p>
        <p>Sincerely,</p>
        <p>${user.displayName}</p>
      `;

    try {
      fetchEmailToBack({
        displayName: user.displayName,
        email: user.email,
        htmlContent: htmlContent,
        subject: selectedBill.short_title,
      })
        .then((res) => {
          if (res.status == 200) {
            setEmailSent(true);
            console.log("Email sent successfully");
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <Card
      sx={{
        width: 430,
        maxHeight: 410,
        overflow: "auto",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent>
        <CustomTypographyTwo variant="h6" component="div">
          <p>{`Summary: ${
            billSummary
              ? billSummary
              : "A legislative analyst in the Congressional Research Service will begin analyzing this legislation after text becomes available."
          }`}</p>
        </CustomTypographyTwo>
        <IconContainer>
          <Tooltip title="Click to email rep to express support">
            <ThumbsUpIcon
              icon={faThumbsUp}
              size="lg"
              onClick={() => sendEmail(true)}
            />
          </Tooltip>
          <Tooltip title="Click to email rep to express opposition">
            <ThumbsDownIcon
              icon={faThumbsDown}
              size="lg"
              onClick={() => sendEmail(false)}
            />
          </Tooltip>
        </IconContainer>
        {emailSent && (
          <EmailSentMessage>Email sent successfully!</EmailSentMessage>
        )}
      </CardContent>
      <ListWrapper>
        <ListItem>
          <CustomListItemText>{`Bill Sponsor: ${selectedBill.sponsor_name} (${selectedBill.sponsor_party}) State: ${selectedBill.sponsor_state}`}</CustomListItemText>
        </ListItem>
      </ListWrapper>
    </Card>
  );
}
