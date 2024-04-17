import billImage from "../../assets/billImage";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import styled from "styled-components";
import iconImage from "../Icons";

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

const getStatusColor = (status) => {
  switch (status) {
    case "introduced_date":
      return "yellow"; // Yellow color for bills with introduced status
    case "passed":
      return "green"; // Green color for bills with passed status
    case "vetoed":
      return "red"; // Red color for bills with vetoed status
    default:
      return "white"; // Default color
  }
};

export default function BillsCard({ bill, onClick }) {
  let majorAction = bill.latest_major_action.split("Committee on").pop();
  const maxTextLength = 50;

  const truncatedMajorAction =
    majorAction && majorAction.length > maxTextLength
      ? majorAction.slice(0, maxTextLength) + "..."
      : majorAction;

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

  const foundActionIcon = (majorAction) => {
    if (majorAction) {
      const words = majorAction.split(/\s+/);
      const icons = words.map((word) => {
        const lowerWord = word.toLowerCase();
        for (const key of Object.keys(iconImage)) {
          if (lowerWord.includes(key.replace("_", " "))) {
            return iconImage[key];
          }
        }
      });
      const filteredIcons = icons.filter((icon) => icon !== undefined);
      return filteredIcons.length ? filteredIcons : [iconImage.unknown]; // Return unknown icon if no matches
    }
    return [iconImage.unknown]; // Return unknown icon if majorAction is falsy
  };
  
  const icons = foundActionIcon(majorAction);
  const statusColor = getStatusColor(bill.status);

  return (
    <Card
      sx={{
        width: 350,
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: statusColor, // Apply background color based on bill status
      }}
      onClick={() => onClick(bill)} // Add onClick handler to the Card component
    >
      <CardMedia
        sx={{ height: 175, maxWidth: 350 }}
        image={foundActionImage(majorAction)}
        title="bill category image"
      />
      <CardContent>
        <CustomTypography variant="body2">
          Subject: {truncatedMajorAction}
        </CustomTypography>
        <br />
        <CustomTypographyTwo variant="h6" component="div">
          {bill.short_title}
        </CustomTypographyTwo>
      </CardContent>
      <ListWrapper>
        <div style={{ display: "flex", marginRight: "300px" }}>
          {" "}
          {/* Use flexbox to display icons in a row */}
          {icons.map((Icon, index) => (
            <ListItem key={index}>{Icon}</ListItem>
          ))}
        </div>
        <ListItem>
          <CustomListItemText>{`Date: ${bill.latest_major_action_date}`}</CustomListItemText>
        </ListItem>
      </ListWrapper>
    </Card>
  );
}
