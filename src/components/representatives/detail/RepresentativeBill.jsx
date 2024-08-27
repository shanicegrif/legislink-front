import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Loading from "../../messages/Loading";
import BillError from "../../messages/BillError";
import RepBillCard from "../../bills/RepBillCard"; // Ensure consistent casing
import BillSummaryPlaceholder from "../../messages/SummaryMes";
import SummaryCard from "../../bills/SummaryCard";
import "../../bills/Bills.css";

const congressKey = import.meta.env.VITE_BASE_CONGRESS_API_KEY;

export default function RepresentativeBill({ bioguideID }) {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBill, setSelectedBill] = useState(null);
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.congress.gov/v3/member/${bioguideID}/sponsored-legislation?api_key=${congressKey}&format=json`
      )
      .then((res) => {
        console.log("rep bills",res.data.sponsoredLegislation);
        const fetchedBills = res.data.sponsoredLegislation.filter(
          (elem) => elem.congress === "118"
        );
        setBills(fetchedBills);
        setLoading(false);
        if (fetchedBills.length === 0) {
          setError("No bills found for this representative.");
        } else {
          setError(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching bills:", error);
        setLoading(false);
        setError("An error occurred while fetching bills.");
      });
  }, [bioguideID]);

  const handleBillClick = (bill) => {
    setEmailSent(false);
    setSelectedBill(bill);
  };

  return (
    <div>
      <h3>Bills Sponsored By Rep.</h3>
      <div className="bill-section">
        <div className="bill-list">
          {loading ? (
            <Loading />
          ) : error ? (
            <BillError message={error} />
          ) : (
            <Box display="flex" flexWrap="wrap" justifyContent="space-around">
              {bills.map((bill) => (
                <RepBillCard
                  key={bill.number}
                  bill={bill}
                  onClick={() => handleBillClick(bill)}
                />
              ))}
            </Box>
          )}
        </div>
        <div className="bill-summary-container">
          <h2>Bill Summary</h2>
          {selectedBill ? (
            <div className="summary-card">
              <SummaryCard
                selectedBill={selectedBill}
                emailSent={emailSent}
                setEmailSent={setEmailSent}
              />
            </div>
          ) : (
            <BillSummaryPlaceholder />
          )}
        </div>
      </div>
    </div>
  );
}