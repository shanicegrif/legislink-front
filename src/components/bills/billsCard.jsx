import React, { useEffect, useState } from "react";
import billImage from "../../assets/billImage";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import styled from "styled-components";
const congressApi = import.meta.env.VITE_BASE_CONGRESS_API_KEY;

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

export default function BillsCard({ bill }) {
  let majorAction = bill.latest_major_action.split("Committee on").pop();

  console.log(bill);

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

  return (
    <Card
      sx={{
        width: 350,
        margin: "10px",
        display: "flex",
        flexDirection: "column",
      }}
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
        <ListItem>
          {/* <ListItemText primary={`Summary: ${billSummary ? billSummary : "A legislative analyst in the Congressional Research Service will begin analyzing this legislation after text becomes available."}`} /> */}
        </ListItem>
        <ListItem>
          <ListItemText primary={`Date: ${bill.latest_major_action_date}`} />
        </ListItem>
        {/* <ListItem>
          <ListItemText primary={`Bill Sponsor: ${bill.sponsor_name} State: ${bill.sponsor_state} Party: ${bill.sponsor_party}`} />
        </ListItem> */}
      </ListWrapper>
    </Card>
  );
}
