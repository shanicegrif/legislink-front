/** react components */
import { useLayoutEffect, useState } from "react";

/** style components */
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

/** etc */
import { Link } from "react-router-dom";
import axios from "axios";
import { fetchForHouse } from "../api/axios";

/** environmental variable */
const civic_api_key = import.meta.env.VITE_BASE_CIVIC_INFO_API_KEY;

/** test purpose; need to swap */
const zipcode = import.meta.env.VITE_BASE_ZIP;

/**
 * MyDistrict()
 * ========================================
 * will render a card for rep. based on zip
 * 
 * 
 * @returns {ReactComponentElement}
 */
export default function MyDistrict(){
    const [ representative, setRepresentative ] = useState([]);
    
    useLayoutEffect(() => {
        axios.get(`https://www.googleapis.com/civicinfo/v2/representatives?address=${zipcode}&levels=country&roles=legislatorLowerBody&key=${civic_api_key}`).then(res => {
            fetchForHouse().then(res2 => setRepresentative(
                res2.data.results[0].members.filter(
                  (member) => member.state === "NY" && member.ocd_id == res.data.offices[0].divisionId
                )
            ));
        })
    },[])

    return (
        <div>
            {representative.map(elem => (
                <Box sx={{ minWidth: 200 }}>
                    <Card variant="outlined">
                        <>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    District {elem.district}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {elem.title} {elem.first_name} {elem.last_name}
                                </Typography>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={`https://www.congress.gov/img/member/${elem.id.toLowerCase()}_200.jpg`}
                                    alt="Portrait"
                                />
                            </CardContent>
                            <CardActions>
                                <Link to={`/representatives/${elem.id}`} state={{representative:elem}}><Button size="small">Learn More</Button></Link>
                            </CardActions>
                        </>
                    </Card>
                </Box>
                ))}
        </div>
    )
}