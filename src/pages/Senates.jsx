import { useLayoutEffect, useState } from "react";
import { fetchForSenate } from "../api/axios";
import RepresentativeCard from "../components/representatives/RepresentativeCard";
import { useLocation } from "react-router-dom";
/** from react-bootstrap */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

const serverURL = import.meta.env.VITE_BASE_URL;

export default function Representatives() {
  const [senatesNY, setSenatesNY] = useState([]);
  let location = useLocation();

  useLayoutEffect(() => {
    fetchForSenate()
      .then((res) => {
        if (res.status != 200) {
          axios.get(`${serverURL}/senates`).then((res) => {
            setSenatesNY(res.data.data.payload);
          });
        } else {
          console.log(
            res.data.results[0].members.filter(
              (member) => member.state === "NY"
            )
          );
          setSenatesNY(
            res.data.results[0].members.filter(
              (member) => member.state === "NY"
            )
          );
        }
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  }, [location]);

  return (
    <Container fluid style={{ backgroundColor: "#f4f1de" }}>
      <Row style={{ backgroundColor: "#f4f1de" }}>
        {senatesNY.map((elem) => (
          <Col
            key={elem.id}
            xs={12}
            md={3}
            sm={4}
            s={6}
            lg={2}
            style={{ paddingBottom: "10px" }}
          >
            {/** Card for senates */}
            {/* {<RepresentativeCard representative={elem} />} */}
          </Col>
        ))}
      </Row>
    </Container>
  );
}
