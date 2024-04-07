import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { fetchForBills } from "../api/axios";
import BillsCard from "../components/bills/billsCard";
import Error from "../components/messages/Error";
import Loading from "../components/messages/Loading";

export default function Bills() {
  const [bills, setBills] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [selectedOption, setSelectedOption] = useState("introduced_date");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  const fetchBillsByKeyword = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchForBills(keyword, pageNumber.toString());
      if (res.data && res.data.results && res.data.results.length > 0) {
        setBills(res.data.results[0].bills);
      } else {
        setBills([]);
      }
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  const handleSearch = () => {
    fetchBillsByKeyword();
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handlePagePrev = () => {
    pageNumber > 0 ? setPageNumber(pageNumber - 20) : setPageNumber(0);
  };

  const handlePageNext = () => {
    setPageNumber(pageNumber + 20);
  };

  useEffect(() => {
    fetchBillsByKeyword();
  }, [selectedOption, pageNumber]);

  return (
    <div className="bill-container">
      <Box mt={4} mb={2} sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          label="Enter keyword for filtering"
          variant="outlined"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          sx={{
            width: "250px", // Adjust the width as needed
            marginBottom: "20px",
            marginRight: "10px",
          }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            marginTop: "8px", // Adjust the top margin as needed
            width: "100px", // Set fixed width for the button
            height: "40px", // Set fixed height for the button
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <Select
          value={selectedOption}
          onChange={handleOptionChange}
          variant="outlined"
          sx={{
            width: "200px", // Adjust the width as needed
          }}
        >
          <MenuItem value="introduced_date">Introduced</MenuItem>
          <MenuItem value="updated">Updated</MenuItem>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="passed">Passed</MenuItem>
          <MenuItem value="enacted">Enacted</MenuItem>
          <MenuItem value="vetoed">Vetoed</MenuItem>
        </Select>
      </Box>
      {loading && <Loading />}
      {error && <Error message={error.message} />}
      <Box display="flex" flexWrap="wrap" justifyContent="space-around">
        {bills.map((bill) => (
          <BillsCard key={bill.id} bill={bill} />
        ))}
      </Box>
      {/* page button */}
      <Button size="small" onClick={handlePagePrev} > prev</Button>
      <Button size="small" onClick={handlePageNext} > next</Button>
    </div>
  );
}