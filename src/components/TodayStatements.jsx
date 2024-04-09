/** react hooks & custom components from react & react-router-dom */
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
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
export default function TodayStatements(){
    /** declare hooks */
    const [ statements, setStatements ] = useState([]);
    const location = useLocation();
    
    function getTodaysDate(){
        let yourDate = new Date();
        const offset = yourDate.getTimezoneOffset()
        yourDate = new Date(yourDate.getTime() - (offset*60*1000))
        return yourDate.toISOString().split('T')[0]
    }

    /** will fetch data before rendering DOM */
    useEffect(()=>{
        console.log(getTodaysDate());
        axios.get(`https://api.propublica.org/congress/v1/statements/date/${getTodaysDate()}.json`, {headers: {
            "X-API-Key": `${propublicaAPIKey}`,
        }}).then(res => setStatements(res.data.results));
    }, [location]);
    
    return(
        <div>
            <h2>Today's Statements</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Statements">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {statements.map(((statement, index) => (
                        <TableRow
                            key={statement.date+index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {statement.date}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {statement.title}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Link to={statement.url}>{statement.name}</Link>
                            </TableCell>
                        </TableRow>
                    )))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
   )
}