import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import brandImg from "../assets/brand-img.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from "@mui/icons-material/Home";
import "./Nav.css";

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="menu-icon" onClick={toggleSidebar}>
        {isSidebarOpen ? <MenuIcon /> : <MenuIcon fontSize="large" />}
        {window.innerWidth <= 749 && (
          <div className="home-header__app-name">LegisLink</div>
        )}
      </div>
      <div>
        <div className="menu-icon" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <MenuIcon />
          ) : (
            <MenuIcon fontSize="large" style={{ color: "black" }} />
          )}
        </div>
        <aside className={`home-nav ${isSidebarOpen ? "active" : ""}`}>
          <div className="home-nav__close-icon" onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <i className="fas fa-times home-nav__brand-close"></i>
            )}
          </div>
          <div className="home-brand-logo">
            <p className="home-nav-title">LegisLink </p>
            <img src={brandImg} alt="brand imglogo" />
          </div>
          <ul className="home-nav__list" onClick={closeSidebar}>
            <Link to={`/`}>
              <li className={`home-nav__list-item ${
                location.pathname === "/" ? "active" : ""
              }`}> <HomeIcon fontSize="large"/> <span className="nav-text">Home</span></li>
            </Link>
            <Link to={`/about`}>
              <li className={`home-nav__list-item ${
                location.pathname === "/about" ? "active" : ""
              }`}> <InfoIcon fontSize="large"/> <span className="nav-text">About</span></li>
            </Link>
            <Link to={`/sign-in`}>
              <li className={`home-nav__list-item ${
                location.pathname === "/sign-in" ? "active" : ""
              }`}> <LoginIcon fontSize="large"/> <span className="nav-text">Sign In</span></li>
            </Link>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default Nav;
