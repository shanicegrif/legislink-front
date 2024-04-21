import billImage from "../../assets/billImage";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
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
  margin-top: 20px; // Align the list items to the bottom of the card
  margin-bottom: -25px;
  margin-left: -20px;
`;

const CustomListItemText = styled.div`
  font-family: "Merriweather", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow icons to wrap to the next line */
  gap: 10px; /* Add space between icons */
`;

const RepBillCard = ({ bill, onClick }) => {
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
          const modifiedKey = key.replace("_", " ");
          if (lowerWord.includes(modifiedKey)) {
            return { name: key, icon: iconImage[key] };
          }
        }
      });
      const filteredIcons = icons.filter((icon) => icon !== undefined);
      return filteredIcons.length
        ? filteredIcons
        : [{ name: "unknown", icon: iconImage.unknown }]; // Return unknown icon if no matches
    }
    return [{ name: "unknown", icon: iconImage.unknown }]; // Return unknown icon if majorAction is falsy
  };
  const icons = foundActionIcon(majorAction);

  const getStatusColor = (bill) => {
    if (bill.vetoed) {
      return "red";
    } else if (bill.passed) {
      return "green";
    } else if (bill.introduced_date) {
      return "orange";
    } else {
      return "white"; // Default color
    }
  };
  const statusColor = getStatusColor(bill);

  const getStatusText = (bill) => {
    if (bill.vetoed) {
      return <span style={{ color: "red" }}>Rejected</span>;
    } else if (bill.passed) {
      return <span style={{ color: "green" }}>Approved</span>;
    } else if (bill.introduced_date) {
      return <span style={{ color: "orange" }}>Pending</span>;
    } else {
      return <span style={{ color: "black" }}>Unknown</span>;
    }
  };
  const statusText = getStatusText(bill);

  return (
    <Card
      sx={{
        width: 350,
        margin: "10px",
        display: "flex",
        flexDirection: "column",
      }}
      onClick={() => onClick(bill)}
    >
      <CardMedia
        sx={{ height: 175, maxWidth: 350 }}
        image={foundActionImage(majorAction)}
        title="bill category image"
      />
      <CardContent sx={{ borderLeft: `5px solid ${statusColor}` }}>
        <CustomTypography variant="body2">
          Subject: {majorAction}
        </CustomTypography>
        <br />
        <CustomTypographyTwo variant="h6" component="div">
          {bill.short_title}
        </CustomTypographyTwo>
        <ListWrapper>
        <IconContainer>
            {icons.map((icon, index) => (
              <Tooltip key={index} title={icon.name} arrow>
                <IconButton>{icon.icon}</IconButton>
              </Tooltip>
            ))}
          </IconContainer>
          <ListItem>
            <CustomListItemText>Status: {statusText}</CustomListItemText>
          </ListItem>
          <ListItem>
            <CustomListItemText>{`Date: ${bill.latest_major_action_date}`}</CustomListItemText>
          </ListItem>
        </ListWrapper>
      </CardContent>
    </Card>
  );
};

export default RepBillCard;
