/** react hooks & custom components from react & react-router-dom */
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

/** styling components */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

/** etc */
import axios from "axios";

/** env var */
const propublicaAPIKey = import.meta.env.VITE_BASE_PROPUBLICA_KEY;

/**
 * RepresentativeStatement()
 * ===============================================
 * this component will render statements part.
 * currently, this component renders only date/title(statement)/url
 *
 * @returns {ReactComponentElement}
 */
export default function TodayVoteHouse() {
  /** declare hooks */
  const [voteHouse, setVoteHouse] = useState([]);
  const location = useLocation();

  function getTodaysDate() {
    let yourDate = new Date();
    const offset = yourDate.getTimezoneOffset();
    yourDate = new Date(yourDate.getTime() - offset * 60 * 1000);
    return yourDate.toISOString().split("T")[0];
  }

  /** will fetch data before rendering DOM */
  useEffect(() => {
    console.log(getTodaysDate());
    axios
      .get(
        `https://api.propublica.org/congress/v1/house/votes/${getTodaysDate()}/${getTodaysDate()}.json`,
        {
          headers: {
            "X-API-Key": `${propublicaAPIKey}`,
          },
        }
      )
      .then((res) => setVoteHouse(res.data.results.votes));
  }, [location]);

  /* 
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
    */
  return (
    <div style={{ overflow: "auto", maxHeight: "40vh" }}>
      {voteHouse.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="Statements">
            <TableHead>
              <TableRow>
                <TableCell align="center">Bill Number</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Result</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Vote</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {voteHouse.map((vote, index) => (
                <TableRow
                  className={`bill-card ${vote.result.toLowerCase()}`}
                  key={vote.start_date + index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{vote.bill.number}</TableCell>
                  <TableCell component="th" scope="row">
                    {vote.bill.title}
                  </TableCell>
                  <TableCell align="center">{vote.result}</TableCell>
                  <TableCell align="center">{vote.description}</TableCell>
                  <TableCell component="th" scope="row">
                    <TableCell align="center">Yes:{vote.total.yes}</TableCell>
                    <TableCell align="center">No:{vote.total.no}</TableCell>
                    <TableCell align="center">
                      Not Voting:{vote.total.not_voting}
                    </TableCell>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div
          className="no-voting-message"
          style={{
            fontSize: "18px",
            textAlign: "center",
            marginTop: "20px",
            color: "#666",
          }}
        >
          There is no voting in the house today.
        </div>
      )}
    </div>
  );
}
