import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import billImage from "../../assets/billImage";
import iconImage from "../Icons"; // Ensure this path is correct

const CustomTypography = styled.div`
  font-family: "Merriweather", serif;
  font-weight: 300;
  font-style: italic;
  font-size: 13px;
`;

const CustomTypographyTwo = styled.div`
  font-family: "Merriweather", serif;
  font-weight: 400;
  font-size: 15px;
`;

const ListWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: -25px;
  margin-left: -20px;
`;

const CustomListItemText = styled.div`
  font-family: "Merriweather", serif;
  font-weight: 400;
  font-size: 13px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const RepBillCard = ({ bill, onClick }) => {
  // Using bill.latestAction.text instead of latest_major_action
  const majorAction = bill.latestAction?.text || "No recent action";
  const maxTextLength = 50;

  const truncatedMajorAction =
    majorAction.length > maxTextLength
      ? majorAction.slice(0, maxTextLength) + "..."
      : majorAction;

  const foundActionImage = () => {
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

  const foundActionIcon = () => {
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
      return icons.filter((icon) => icon !== undefined);
    }
    return [{ name: "unknown", icon: iconImage.unknown }];
  };

  const icons = foundActionIcon();

  const getStatusColor = () => {
    if (bill.vetoed) {
      return "red";
    } else if (bill.passed) {
      return "green";
    } else if (bill.introducedDate) {
      return "orange";
    } else {
      return "white";
    }
  };
  const statusColor = getStatusColor();

  const getStatusText = () => {
    if (bill.vetoed) {
      return <span style={{ color: "red" }}>Rejected</span>;
    } else if (bill.passed) {
      return <span style={{ color: "green" }}>Approved</span>;
    } else if (bill.introducedDate) {
      return <span style={{ color: "orange" }}>Pending</span>;
    } else {
      return <span style={{ color: "black" }}>Unknown</span>;
    }
  };
  const statusText = getStatusText();

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
          Subject: {truncatedMajorAction}
        </CustomTypography>
        <br />
        <CustomTypographyTwo variant="h6" component="div">
          {bill.title}
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
            <CustomListItemText>
              {`Date: ${bill.latestAction?.actionDate || "Unknown"}`}
            </CustomListItemText>
          </ListItem>
        </ListWrapper>
      </CardContent>
    </Card>
  );
};

export default RepBillCard;