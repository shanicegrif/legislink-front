import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Loading from "../../messages/Loading";
import BillError from "../../messages/BillError"; // Import your BillError component here
import RepBillCard from "../../bills/repBillCard";
const propublicaAPIKey = import.meta.env.VITE_BASE_PROPUBLICA_KEY;


export default function RepresntativeBill() {
  const [billType, setBillType] = useState("introduced");
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { bioguideID } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.propublica.org/congress/v1/members/${bioguideID}/bills/${billType}.json`,
        {
          headers: {
            "X-API-Key": `${propublicaAPIKey}`,
          },
        }
      )
      .then((res) => {
        const fetchedBills = res.data.results[0].bills.filter(
          (elem) => elem.congress == "118"
        );
        setBills(fetchedBills);
        setLoading(false);
        if (fetchedBills.length === 0) {
          setError("No bills found for the selected type.");
        } else {
          setError(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching bills:", error);
        setLoading(false);
        setError("An error occurred while fetching bills.");
      });
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
      <h3>Bills Sponsored By Rep. </h3>
      {loading ? (
        <Loading />
      ) : error ? (
        <BillError />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {bills.map((bill) => (
            <RepBillCard key={bill.bill_id} bill={bill}/>
          ))}
        </div>
      )}
    </div>
  );
}
