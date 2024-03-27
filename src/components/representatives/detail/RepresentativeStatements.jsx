import axios from "axios";
import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const propublicaAPIKey = import.meta.env.VITE_BASE_PROPUBLICA_KEY;

export default function RepresntativeStatements(){
    const [ statements, setStatements ] = useState([]);
    const {bioguideID} = useParams();
    useLayoutEffect(()=>{
        axios.get(`https://api.propublica.org/congress/v1/members/${bioguideID}/statements/118.json`, {headers: {
            "X-API-Key": `${propublicaAPIKey}`,
        }}).then(res => setStatements(res.data.results));
    },[bioguideID]);
    
    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="Statements">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align="center">Title</TableCell>
                        <TableCell align="center">URL</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {statements.map(((statement, index) => (
                    <TableRow
                        key={bioguideID+statement.date+index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {statement.date}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {statement.title}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <Link to={statement.url}>{statement.url}</Link>
                        </TableCell>
                    </TableRow>
                )))}
                </TableBody>
            </Table>
        </TableContainer>
   )
}