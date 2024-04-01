import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./RepSenCard.css";

const SenateCard = ({ representative }) => {
  return (
    <div className="card-item">
      <Card
        sx={{
          maxWidth: 200,
          minWidth: 200,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          sx={{ width: 200, height: 190 }}
          image={`https://www.congress.gov/img/member/${representative.id.toLowerCase()}_200.jpg`}
          title="senate image"
        />
        <div className="card-content">
          <CardContent style={{ flex: "1" }}>
            <Typography gutterBottom variant="h5" component="div">
              {representative.first_name} {representative.last_name}
            </Typography>
            <Typography variant="body2">
              Party: {representative.party}
            </Typography>
            <Typography variant="body2">
              State: {representative.state}
            </Typography>
          </CardContent>
        </div>
        <CardActions>
          <Button size="small">
            <Link
              to={`/representatives/${representative.id}`}
              state={{ representative: representative }}
            >
              Learn More
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default SenateCard;
