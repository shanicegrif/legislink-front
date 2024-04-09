import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLayoutEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import Loading from "../components/messages/Loading.jsx";
import "../components/TestLobby.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import MyDistrict from "../components/MyDistrict.jsx";
import TodayStatements from "../components/TodayStatements.jsx";
import axios from "axios";

const serverURL = import.meta.env.VITE_BASE_URL;

export default function TestLobby() {
  const user = useAuth();
  const nav = useNavigate();
  const districtMember = {
    name: "John Doe",
    party: "Democratic",
    district: "1",
  };

  const [preferrences, setPreferrences] = useState({
    myDistrict : true,
    statement : true,
  })

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
    if(user){
      axios.get(`${serverURL}/preferrences/${user.uid}`).then((res) => setPreferrences({myDistrict:res.data.data.payload[0].preferrences_my_district, statement:res.data.data.payload[0].statement}));
    }
  },[user,nav])

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
        <div className="district-member-info">
          <h2>District Member</h2>
          <p>Name: {districtMember.name}</p>
          <p>Party: {districtMember.party}</p>
          <p>District: {districtMember.district}</p>
        </div>
      </header>

      <section className="bills-section">
        <h2>Current Bills</h2>
        {preferrences.myDistrict ? (<MyDistrict />):null}
        <MyDistrict />
        {preferrences.statement ?(<TodayStatements />):null}
        <TodayStatements />
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
    </div>
  );
}
