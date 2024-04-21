import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import "../components/TestLobby.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";
import MyDistrict from "../components/MyDistrict.jsx";
import TodayStatements from "../components/TodayStatements.jsx";
import axios from "axios";
import TodayVoteHouse from "../components/TodayVoteHouse.jsx";

const serverURL = import.meta.env.VITE_BASE_URL;

const ThumbsUpIcon = styled(FontAwesomeIcon)`
  color: green; /* Default color */
  font-size: 25px;
  transition: font-size 0.3s ease; /* Smooth size transition */
  cursor: pointer;

  /* Hover effect */
  &:hover {
    font-size: 35px; /* Increase font size on hover */
  }
`;

const ThumbsDownIcon = styled(FontAwesomeIcon)`
  color: red; /* Default color */
  font-size: 25px;
  transition: font-size 0.3s ease; /* Smooth size transition */
  cursor: pointer;

  /* Hover effect */
  &:hover {
    font-size: 35px; /* Increase font size on hover */
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start; /* Align icons to the right */
  gap: 15px; /* Add space between icons */
`;

export default function TestLobby() {
  const user = useAuth();
  const nav = useNavigate();

  const [preferences, setpreferences] = useState({
    myDistrict: true,
    statement: true,
  });

  // Placeholder data for bills
  const bills = [
    {
      id: 1,
      title: "Education Reform Act",
      summary: "A bill to reform the education system nationwide.",
      status: "Pending",
    },
    {
      id: 2,
      title: "Clean Energy Initiative",
      summary: "A bill to promote the use of clean energy sources.",
      status: "Approved",
    },
    {
      id: 3,
      title: "Healthcare Access Expansion",
      summary:
        "A bill to improve access to healthcare services for all citizens.",
      status: "Rejected",
    },
    {
      id: 4,
      title: "Infrastructure Development Plan",
      summary: "A bill to invest in infrastructure projects nationwide.",
      status: "Pending",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return <span style={{ color: "orange" }}>Pending</span>;
      case "Approved":
        return <span style={{ color: "green" }}>Approved</span>;
      case "Rejected":
        return <span style={{ color: "red" }}>Rejected</span>;
      default:
        return "black";
    }
  };



  useEffect(() => {
    if (!user) {
      console.log("User is not authenticated. Redirecting to login page.");
      nav("/");
    } else {
      console.log("User is authenticated. Entering the lobby.");
    }
  }, [user, nav]);

  useEffect(() => {
    if (user) {
      axios.get(`${serverURL}/preferences/${user.uid}`).then((res) =>
        setpreferences({
          myDistrict: res.data.data.payload[0].preference_my_district,
          statement: res.data.data.payload[0].preference_statement,
        })
      );
    }
  }, [user, nav]);

  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard</h1>
      <header className="dashboard-header">
        <div className="dash-back">
          <div className="district-member-info">
            <h4>Your District Rep.</h4>
            {preferences.myDistrict ? <MyDistrict /> : null}
          </div>
        </div>
        <div className="dash-back">
          <div className="help-links">
            <h4>Helpful Info and Links</h4>
            <ul>
              <li>
                <Link
                  href="https://www.govtrack.us/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GovTrack.us
                </Link>
              </li>
              <li>
                <Link
                  href="https://formspal.com/opencongress/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenCongress
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.vote411.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vote 411
                </Link>
              </li>
              <li>
                <Link
                  href="https://ballotpedia.org/Main_Page"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ballotpedia
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.congress.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Congress.gov
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <section className="bills-section">
        <h2>Bills In Your District</h2>
        <div className="bill-cards">
          {bills.map((bill) => (
            <div
              key={bill.id}
              className={`bill-card ${bill.status.toLowerCase()}`}
            >
              <h3>{bill.title}</h3>
              <p>{bill.summary}</p>
              <p>Status: {getStatusColor(bill.status)}</p>
              <IconContainer>
                <Tooltip title="Click to email rep to express support">
                  <ThumbsUpIcon
                    icon={faThumbsUp}
                    size="lg"
                    onClick={() => sendEmail(true)}
                  />
                </Tooltip>
                <Tooltip title="Click to email rep to express opposition">
                  <ThumbsDownIcon
                    icon={faThumbsDown}
                    size="lg"
                    onClick={() => sendEmail(false)}
                  />
                </Tooltip>
              </IconContainer>
            </div>
          ))}
        </div>
      </section>
      <section className="dash-statements">
        <h2>Today's Statements</h2>
        {preferences.statement ? <TodayStatements /> : null}
      </section>
      <section className="dash-statements">
        <h2>Voted Bills in the House for Today</h2>
        <TodayVoteHouse />
      </section>
    </div>
  );
}
