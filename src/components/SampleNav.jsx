import { Link } from "react-router-dom";
import { useState } from "react";
import brandImg from "../assets/brand-img.png";
import "./SampleNav.css";

const SampleNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="navbar navbar-expand-md fixed-top">
  <div className="home-brand-logo">
    <h2 className="home-nav-title">LegisLink </h2>
    <img src={brandImg} alt="brand imglogo" />
  </div>

  <button
    className="navbar-toggler bg-light"
    style={{ marginRight: "20px", color: "#f1916d" }}
    onClick={toggleSidebar}
  >
    <span className="navbar-toggler-icon"></span>
  </button>

  <div
    className={`collapse navbar-collapse justify-content-end ${sidebarOpen ? "show" : ""}`}
    id="navbarNav"
  >
    <ul className="navbar-nav">
      <Link to="/" className="nav-link">
        <li className="nav-item">Home</li>
      </Link>
      <Link to="/about" className="nav-link">
        <li className="nav-item">About Us</li>
      </Link>
      <Link to="/sign-in" className="nav-link">
        <li className="nav-item">Sign in</li>
      </Link>
    </ul>
  </div>
</nav>

  );
};

export default SampleNav;
