/** react hooks & custom components from react & react-router-dom */
import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

/** styling components */
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
export default function RepresntativeStatements(){
    /** declare hooks */
    const [ statements, setStatements ] = useState([]);
    const { bioguideID } = useParams();

    /** will fetch data before rendering DOM */
    useLayoutEffect(()=>{
        axios.get(`https://api.propublica.org/congress/v1/members/${bioguideID}/statements/118.json`, {headers: {
            "X-API-Key": `${propublicaAPIKey}`,
        }}).then(res => setStatements(res.data.results));
    }, [bioguideID]);
    
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