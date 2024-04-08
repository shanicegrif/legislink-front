import React from "react";
import { Container, Grid, Card, CardContent, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
  return (
    <Container className="About" style={{paddingLeft:'60px'}}>
      <div className="description" style={{marginBottom: '40px'}}>
        Welcome to <strong>LEGISLink!</strong>.
        This app is created by <strong>Genesis Lara</strong>,{" "}
        <strong>Shanice Griffin</strong>, <strong>Sung Yi</strong>, and{" "}
        <strong>Tonesha Rose</strong>. 
        LEGISLink is an innovative application designed to empower and inform voters, facilitating their active participation in the democratic process. 
        This app aims to bridge the information gap that often hinders individuals entering the world of politics by providing user-friendly, reliable, and accessible information.
      </div>
      <Grid container spacing={3}>
          <Card className="card"> 
            <CardContent style={{ height: "300px" }}>
              <Typography variant="h5" component="h2">Genesis Lara</Typography>
              <Typography variant="body1">
                Growing up in the Bronx, I was never educated on who my current
                representatives and council people are. I did not have the
                privilege to be in the spaces that would allow me to make an
                informed decision on who to vote for. I hope my contributions to
                this application will bridge this gap especially in other
                underserved communities in New York.
              </Typography>
              <Link href="https://github.com/gen329" target="_blank" rel="noopener" color="primary">
                <GitHubIcon /> GitHub
              </Link>
            </CardContent>
          </Card>
          <Card className="card"> 
            <CardContent style={{ height: "300px" }}>
              <Typography variant="h5" component="h2">Shanice Griffin</Typography>
              <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
              <Link href="https://github.com/shanicegrif" target="_blank" rel="noopener" color="primary">
                <GitHubIcon /> GitHub
              </Link>
            </CardContent>
          </Card>
          <Card className="card"> 
            <CardContent style={{ height: "300px" }}>
              <Typography variant="h5" component="h2">Sung Yi</Typography>
              <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Vel fringilla est ullamcorper eget nulla. Nulla aliquet enim tortor at auctor urna nunc id. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Neque ornare aenean euismod elementum nisi.</Typography>
              <Link href="https://github.com/dreamseekerfromn" target="_blank" rel="noopener" color="primary">
                <GitHubIcon /> GitHub
              </Link>
            </CardContent>
          </Card>
          <Card className="card"> 
            <CardContent style={{ height: "300px" }}>
              <Typography variant="h5" component="h2">Tonesha Rose</Typography>
              <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis cursus in hac habitasse platea dictumst. Curabitur vitae nunc sed velit dignissim sodales ut eu. Sociis natoque penatibus et magnis dis parturient montes nascetur. Sed risus pretium quam vulputate dignissim suspendisse in. Dui nunc mattis enim ut tellus elementum sagittis vitae.</Typography>
              <Link href="https://github.com/tonesharose31" target="_blank" rel="noopener" color="primary">
                <GitHubIcon /> GitHub
              </Link>
            </CardContent>
          </Card>
      </Grid>
    </Container>
  );
};

export default About;
