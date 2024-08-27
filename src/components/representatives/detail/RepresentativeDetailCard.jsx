import { useLocation, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./RepDetailCard.css";
import styled from "styled-components";

const CustomTypography = styled.div`
  font-family: "Libre Baskerville", serif;
  font-weight: bold;
  font-size: 22px;
`;

const CustomTypographyTwo = styled.div`
  font-family: "Libre Baskerville", serif;
  font-size: 16px;
`;

export default function RepresentativeDetailCard({ representative }) {
  console.log(representative)
  return (
    <div className="detail-rep-card">
      <div className="card-item">
        <Card
          sx={{
            minWidth: 375,
            maxWidth: "90%", // Set maximum width to 90% of the container
            display: "flex",
            flexDirection: "row",
          }}
        >
          <CardMedia
            sx={{ width: 250, height: 200, maxWidth: 150 }}
            image={`${representative.depiction.imageUrl}`}
            title="senate image"
          />
          <div className="card-content">
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: 150,
                padding: 1, // Remove default padding
                paddingLeft: "10px",
                width: "100%", // Allow content to stretch to full width
              }}
            >
              <CustomTypography>
              {representative.name}
              </CustomTypography>
              <CustomTypographyTwo variant="body2" style={{ marginBottom: "8px" }}>
                Party: {representative.partyName}
              </CustomTypographyTwo>
              <CustomTypographyTwo variant="body2" style={{ marginBottom: "8px" }}>
                State: {representative.state}
              </CustomTypographyTwo>
              {/* <CustomTypographyTwo variant="body2" style={{ marginBottom: "8px" }}>
                Homepage: {representative.url}
              </CustomTypographyTwo> */}
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
}
