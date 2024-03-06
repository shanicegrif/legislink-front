import { useLayoutEffect, useState } from "react";
import { fetchForBills } from "../api/axios";
import BillsCard from "../components/bills/billscard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation } from "react-router-dom";


export default function Bills() {
    const [bills, setBills] = useState([]);
    let location = useLocation();

    useLayoutEffect(() => {
        fetchForBills().then((res) => {
            setBills(res.data.results[0].bills)
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        });
    }, [location]);

    return (
        <Container fluid>
            <Row>
                {bills.map((elem) => (<Col xs={6} md={3} s={4}><BillsCard bill={elem} /></Col>))}
            </Row>
        </Container>
    )
}