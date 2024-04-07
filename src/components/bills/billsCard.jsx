import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';
const congressApi = import.meta.env.VITE_BASE_CONGRESS_API_KEY;

const cardStyle = {
  width: 400, // Set a fixed width for the card
  margin: '10px', // Add margin for spacing between cards
};

export default function BillsCard({ bill }) {
  let majorAction = bill.latest_major_action.split("Committee on").pop()
  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Typography variant="h6" component="div">
          {bill.short_title}
          <br/> 
          <br/>
          <br/>
          <br/>
          <br/>
        {majorAction}

        </Typography>
        <Typography variant="body2" color="text.secondary">
          {bill.title} {bill.state}
        </Typography>
      </CardContent>
      <List>
        <ListItem>
          {/* <ListItemText primary={`Summary: ${billSummary ? billSummary : "A legislative analyst in the Congressional Research Service will begin analyzing this legislation after text becomes available."}`} /> */}
        </ListItem>
        <ListItem>
          <ListItemText primary={`Date: ${bill.latest_major_action_date}`} />
        </ListItem>
        {/* <ListItem>
          <ListItemText primary={`Bill Sponsor: ${bill.sponsor_name} State: ${bill.sponsor_state} Party: ${bill.sponsor_party}`} />
        </ListItem> */}
      </List>
    </Card>
  );
}