import billImage from "../../assets/billImage";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import styled from "styled-components";

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
  font-size: 13px;
`;

export default function BillsCard({ bill, onClick }) {
  let majorAction = bill.latest_major_action.split("Committee on").pop();

  const foundActionImage = (majorAction) => {
    if (majorAction) {
      const lowerMajorAction = majorAction.toLowerCase();
      for (const key of Object.keys(billImage)) {
        if (lowerMajorAction.includes(key.replace("_", " "))) {
          return billImage[key];
        }
      }
    }
    return billImage.unknown;
  };
  console.log(bill);

  return (
    <Card
      sx={{
        width: 350,
        margin: "10px",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={() => onClick(bill)} // Add onClick handler to the Card component
    >
      <CardMedia
        sx={{ height: 175, maxWidth: 350 }}
        image={foundActionImage(majorAction)}
        title="bill category image"
      />
      <CardContent>
        <CustomTypography variant="h2" component="div">
          <h2>{bill.bill_slug}</h2>
        </CustomTypography>
        <CustomTypography variant="body2">
          Subject: {majorAction}
        </CustomTypography>
        <br />
        <CustomTypographyTwo variant="h6" component="div">
          {bill.short_title}
        </CustomTypographyTwo>
      </CardContent>
      <ListWrapper>
        <ListItem>
          <CustomListItemText>{`Date: ${bill.latest_major_action_date}`}</CustomListItemText>
        </ListItem>
      </ListWrapper>
    </Card>
  );
}
