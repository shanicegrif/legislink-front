import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./RepSenCard.css";

const CustomTypography = styled.div`
  font-family: "Libre Baskerville", serif;
  font-weight: bold;
  font-size: 22px;
`;

const StyledCard = styled(Card)`
  position: relative;
  width: 220px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.6s, box-shadow 0.6s;

  &:hover {
    transform: perspective(800px) rotateY(15deg) rotateX(15deg);

    .card-info {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const CardBackground = styled.div`
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: transform 0.6s;
  pointer-events: none;
`;

const CardInfo = styled.div`
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #000;
  background: rgba(255, 255, 255, 0.9);
  width: 100%;
  transform: translateY(100%);
  opacity: 0;
  transition: transform 0.6s;
`;

export default function RepresentativeCard({ representative }) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    setMouseX(e.clientX - rect.left - rect.width / 2);
    setMouseY(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <div className="card-item">
      <StyledCard
        sx={{
          minWidth: 220,
          maxWidth: 320,
          boxShadow:
            representative.partyName === "Republican"
              ? "4px 4px 12px red"
              : representative.partyName === "Democratic"
              ? "4px 4px 12px #2366c8"
              : "4px 4px 12px grey",
        }}
        onMouseMove={handleMouseMove}
      >
        <CardBackground
          className="card-bg"
          style={{
            backgroundImage: `url(${representative.depiction.imageUrl})`,
            transform: `translateX(${mouseX / -270}px) translateY(${
              mouseY / -270
            }px)`,
          }}
        />
        <CardInfo className="card-info">
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              minHeight: 150,
              padding: 1, // Remove default padding
              paddingLeft: "10px",
            }}
          >
            <CustomTypography>{representative.name}</CustomTypography>
            <Typography variant="body2">
              Party: {representative.partyName}
            </Typography>
            <Typography variant="body2">
              District: {representative.district}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link
                to={`/representatives/${representative.bioguideId}`}
                state={{ representative: representative }}
              >
                Learn More
              </Link>
            </Button>
          </CardActions>
        </CardInfo>
      </StyledCard>
    </div>
  );
}
