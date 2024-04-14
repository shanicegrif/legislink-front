import billImage from "../../assets/billImage";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
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

const RepBillCard = ({ bill, onClick }) => {
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

  console.log(bill)
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
      <CardContent>
        <CustomTypography variant="body2">
          Subject: {majorAction}
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
};

export default RepBillCard;
