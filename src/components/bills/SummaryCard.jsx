import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
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

export default function SummaryCard({ selectedBill }) {
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
        <CustomTypographyTwo variant="h6" component="div">
          {selectedBill.short_title}
        </CustomTypographyTwo>
      </CardContent>
      <ListWrapper>
        <ListItem>
          <ListItemText primary={`Bill Sponsor: ${selectedBill.sponsor_name} State: ${selectedBill.sponsor_state} Party: ${selectedBill.sponsor_party}`} />
        </ListItem>
      </ListWrapper>
    </Card>
  );
}
