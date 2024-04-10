import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLayoutEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import Loading from "../components/messages/Loading.jsx";
import "../components/TestLobby.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import Link from "@mui/material/Link";
import MyDistrict from "../components/MyDistrict.jsx";
import TodayStatements from "../components/TodayStatements.jsx";
import axios from "axios";
import TodayVoteHouse from "../components/TodayVoteHouse.jsx";

const serverURL = import.meta.env.VITE_BASE_URL;

const cardStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center" /* Optional: Align items vertically in the center */,
  backgroundColor: "rgba(129, 178, 154, 0.8)",
};

export default function TestLobby() {
  const user = useAuth();
  const nav = useNavigate();

  const [preferences, setpreferences] = useState({
    myDistrict: true,
    statement: true,
  });

  // Placeholder data for bills
  const bills = [
    { id: 1, title: "Bill 1", summary: "Summary of Bill 1", status: "Pending" },
    {
      id: 2,
      title: "Bill 2",
      summary: "Summary of Bill 2",
      status: "Approved",
    },
    {
      id: 3,
      title: "Bill 3",
      summary: "Summary of Bill 3",
      status: "Rejected",
    },
    { id: 4, title: "Bill 4", summary: "Summary of Bill 4", status: "Pending" },
  ];

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
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ballotpedia
                </Link>
              </li>
              <li>
                <Link
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenCongress
                </Link>
              </li>
              <li>
                <Link
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vote 411
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
              <p>Status: {bill.status}</p>
              <div className="icon-container">
                <FontAwesomeIcon icon={faThumbsUp} className="thumbs-up" />
                <FontAwesomeIcon icon={faThumbsDown} className="thumbs-down" />
              </div>
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
