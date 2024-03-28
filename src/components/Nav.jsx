import { useState } from "react";
import { Link } from "react-router-dom";
import brandImg from "../assets/brand-img.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "./Nav.css";

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="nav">
      <div className="menu-icon" onClick={toggleSidebar}>
        {isSidebarOpen ? <MenuIcon/> : <MenuIcon fontSize="large" style={{color: "black"}}/>}
      </div>
      <aside className={`home-nav ${isSidebarOpen ? "active" : ""}`}>
        <div className="nav__close-icon" onClick={toggleSidebar}>
        {isSidebarOpen ? (
            <CloseIcon fontSize="large"/>
          ) : (
            <i class="fas fa-times sidenav__brand-close"></i>
          )}
        </div>
        <div className="brand-logo">
          <p className="nav-title">LegisLink </p>
          <img src={brandImg} alt="brand imglogo" />
        </div>
        <ul className="nav__list" onClick={closeSidebar}>
          <li className="nav__list-item">
            <Link to={`/`}>Home</Link>
          </li>
          <li className="nav__list-item">
            <Link to={`/about`}>About</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Nav;
