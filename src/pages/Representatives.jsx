import { useLayoutEffect, useState } from "react"
import { fetchForHouse } from "../api/axios"
import RepresentativeCard from "../components/representatives/RepresentativeCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation } from "react-router-dom";

export default function Representatives(){
    const [ representativesNY, setRepresentativesNY ] = useState([]);
    let location = useLocation();

    useLayoutEffect(()=>{
        fetchForHouse().then((res) => {
            console.log(res.data.results[0].members.filter(member => member.state ==="NY"))
            setRepresentativesNY(res.data.results[0].members.filter(member => member.state === "NY"));
        }).catch(function (error) {
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
                console.log('Error', error.message);
            }
    });},[location]);

    return(
        <Container fluid>
            <Row>
                {representativesNY.map((elem) => (
                    <Col key={elem.id} xs={6} md={3} sm={4}>
                        <RepresentativeCard representative={elem} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
