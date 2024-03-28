import axios from "axios";
import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const propublicaAPIKey = import.meta.env.VITE_BASE_PROPUBLICA_KEY;

export default function RepresntativeBill() {
  const [billType, setBillType] = useState("introduced");
  const [bills, setBills] = useState([]);
  const { bioguideID } = useParams();

  useLayoutEffect(() => {
    axios
      .get(
        `https://api.propublica.org/congress/v1/members/${bioguideID}/bills/${billType}.json`,
        {
          headers: {
            "X-API-Key": `${propublicaAPIKey}`,
          },
        }
      )
      .then((res) =>
        setBills(
          res.data.results[0].bills.filter((elem) => elem.congress == "118")
        )
      );
  }, [bioguideID, billType]);

  function billTypeOnChangeHandler(event) {
    setBillType(event.target.value);
  }

  return (
    <div>
      <Box sx={{ width: 200 }} style={{ marginBottom: "20px" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Bill Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={billType}
            label="Bill Type"
            onChange={billTypeOnChangeHandler}
          >
            <MenuItem value={"introduced"}>Introduced</MenuItem>
            <MenuItem value={"updated"}>Updated</MenuItem>
            <MenuItem value={"active"}>Active</MenuItem>
            <MenuItem value={"passed"}>Passed</MenuItem>
            <MenuItem value={"enacted"}>Enacted</MenuItem>
            <MenuItem value={"vetoed"}>Vetoed</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {bills.map((bill) => (
          <Card key={bill.bill_id}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {bill.bill_id}
              </Typography>
              <Typography variant="body2">{bill.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {bill.summary}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
