/** react components */
import { useEffect, useState } from "react";

/** style components */
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

/** etc */
import { Link } from "react-router-dom";
import axios from "axios";
import { fetchHouseNY } from "../api/axios";
import { useAuth } from "../hooks/useAuth";

/** environmental variable */
const civic_api_key = import.meta.env.VITE_BASE_CIVIC_INFO_API_KEY;

/** test purpose; need to swap */
//const zipcode = import.meta.env.VITE_BASE_ZIP;
const serverURL = import.meta.env.VITE_BASE_URL;
/**
 * MyDistrict()
 * ========================================
 * will render a card for rep. based on zip
 *
 *
 * @returns {ReactComponentElement}
 */
export default function MyDistrict() {
  const [representative, setRepresentative] = useState([{
    "id": "",
    "name": "",
    "first_name": "",
    "middle_name": null,
    "last_name": "",
    "suffix": null,
    "role": "",
    "gender": "",
    "party": "",
    "times_topics_url": null,
    "twitter_id": "",
    "facebook_account": "",
    "youtube_id": "",
    "seniority": "",
    "next_election": "",
    "api_uri": "",
    "district": "",
    "at_large": false
  }]);
  const user = useAuth();

  async function fetchingStuff(){
    try{
      if(user){
        
        await axios.get(`${serverURL}/users/${user.uid}`)
          .then(async (res) => {
            //console.log(res)
            return await axios.get(`https://www.googleapis.com/civicinfo/v2/representatives?address=${res.data.data.payload.user_street? res.data.data.payload.user_street : null} ${res.data.data.payload.user_city? res.data.data.payload.user_city : null} ${res.data.data.payload.user_state ? res.data.data.payload.user_state : null} ${res.data.data.payload.user_zip}&levels=country&roles=legislatorLowerBody&key=${civic_api_key}`,{timeout:5000})
        })
          .then((res4) => { //console.log(res4)
            fetchHouseNY()
              .then((res2) => {
                console.log(res2)
                setRepresentative(res2.data.results.filter(member => member.district == res4.data.offices[0]?.divisionId.match(/\d+/)))
              })}
          )
      }
    } catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    fetchingStuff();
    console.log(representative)
  }, [user]);

  return (
    <div className="district-member-info">
      {representative ? (
        <Box sx={{ minWidth: 200,
          maxWidth: 100 }}>
          <Card variant="outlined">
            <>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  District {representative.at(-1).district}
                </Typography>
                <Typography variant="h5" component="div">
                  {representative.at(-1).title} {representative.at(-1)?.first_name} {representative.at(-1)?.last_name}
                </Typography>
                <CardMedia
                  sx={{ width: 250, height: 200, maxWidth: 150 }}
                  image={`https://www.congress.gov/img/member/${representative.at(-1).id?.toLowerCase()}_200.jpg`}
                  alt="Portrait"
                />
                <Typography variant="h5" component="div">
                  Party: {representative.at(-1).party}
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  to={`/representatives/${representative.at(-1).id}`}
                  state={{ representative: representative.at(-1) }}
                >
                  <Button size="small">Learn More</Button>
                </Link>
              </CardActions>
            </>
          </Card>
        </Box>
      ):(<div>The information you provided (Zip code: 10469 ) overlaps multiple congressional districts.

      Providing additional information will allow an exact match.</div>)}
    </div>
  );
}
