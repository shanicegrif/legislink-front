import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function RepresentativeCard({ representative }) {
  
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex">
      <Card sx={{ maxWidth: 145, display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          sx={{ height: 160 }}
          image={`https://www.congress.gov/img/member/${representative.id.toLowerCase()}_200.jpg`}
          title="senate image"
        />
        <CardContent style={{ flex: '1' }}>
          <Typography gutterBottom variant="h5" component="div">
            {representative.first_name} {representative.last_name}
          </Typography>
          <Typography variant="body2">Party: {representative.party}</Typography>
          <Typography variant="body2">District: {representative.district}</Typography>
          <Typography variant="body2">Office: {representative.office}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small"><Link to={`/representatives/${representative.id}`} state={{representative:representative}}>Learn More</Link></Button>
        </CardActions>
      </Card>
    </div>
  );
}
