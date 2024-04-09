import "../components/Home.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import voters from "/src/assets/Voters.png";
import newVoter from "/src/assets/new-voter.jpeg";
import billsAffecting from "/src/assets/bills-affecting-community.jpeg";
import supporBill from "/src/assets/support-of-bills.jpeg";

export default function Home() {
  return (
    <main className="home-container">
      <div className="home-content">
        <section className="home-content-top">
          <div className="content-top-text">
            <h3>Building the Political Power of New Voters</h3>
            <p>
              LegisLink empowers and informs people to become active
              participants in our democracy by providing user-friendly,
              reliable, and accessible information in one place - all for free!
            </p>
            <Link to="/sign-in">
            <Button variant="contained" style={{ backgroundColor: "#f1916d" }}>
              Sign up 
            </Button>
          </Link>
          </div>
          <div className="content-top-image">
            <img src={voters} alt="voters" />
          </div>
        </section>
        <section className="home-content-middle">
          <h3>How it works</h3>
          <div className="middle-cards">
            <div className="middle-card">
              <div className="background">
                <div className="image-container">
                  <img src={newVoter} alt="new voter" />
                </div>
                <p className="middle-card-text">
                  Stay up to date with voting information such as polling sites
                  and more
                </p>
              </div>
            </div>
            <div className="middle-card">
              <div className="background">
                <div className="image-container">
                  <img src={billsAffecting} alt="bills affecting community" />
                </div>
                <p className="middle-card-text">
                  Find and keep up with bills affecting your community
                </p>
              </div>
            </div>
            <div className="middle-card">
              <div className="background">
                <div className="image-container">
                  <img src={supporBill} alt="support of bills" />
                </div>
                <p className="middle-card-text">
                  Let your representatives know what you support and don't
                  support
                </p>
              </div>
            </div>
          </div>
          <Link to="/sign-in">
            <Button variant="contained" style={{ backgroundColor: "#f1916d" }}>
              Get Started
            </Button>
          </Link>
        </section>
        <section className="home-content-bottom">
          <h3>We believe the future of our democracy is local.</h3>
          <p className="content-bottom-text">
            LegisLink is an innovative application designed to empower and
            inform new voters, facilitating their active participation in the
            democratic process. This app aims to bridge the information gap that
            often hinders individuals entering the world of politics by
            providing user-friendly, reliable, and accessible information.
          </p>
        </section>
      </div>
    </main>
  );
}
