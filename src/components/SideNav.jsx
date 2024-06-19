import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { logOut } from "../services/firebase";
import brandLogo from "../assets/brand-logo.png";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from '@mui/icons-material/Dashboard';
import HelpIcon from "@mui/icons-material/Help";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import "./SideNav.css";

const SideNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const user = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      alert("not logged in - redirecting");
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logOut().then(() => {
      navigate("/");
    });
  };

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
          <div className="header__app-name">LegisLink</div>
        )}
      </div>
      <header className="header">
        <div className="header__username">Hi, {user.displayName}</div>
        <img src={user.photoURL} alt="user-image" />
      </header>
      <aside className={`sidenav ${isSidebarOpen ? "active" : ""}`}>
        <div className="sidenav__close-icon" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <CloseIcon fontSize="large" />
          ) : (
            <i className="fas fa-times sidenav__brand-close"></i>
          )}
        </div>
        <div className="brand-logo">
          <img src={brandLogo} alt="brand logo" />
        </div>
        <ul class="sidenav__list" onClick={closeSidebar}>
          <Link to={`/dashboard`}>
            <li
              className={`sidenav__list-item ${
                location.pathname === "/dashboard" ? "active" : ""
              }`}
            >
              <DashboardIcon fontSize="large" />
              <span className="nav-text">Dashboard</span>
            </li>
          </Link>
          <Link to={`/bills`}>
            <li
              className={`sidenav__list-item ${
                location.pathname === "/bills" ? "active" : ""
              }`}
            >
              <ReceiptLongIcon fontSize="large" />
              <span className="nav-text">Bills</span>
            </li>
          </Link>
          <Link to={`/representatives`}>
            <li
              className={`sidenav__list-item ${
                location.pathname === "/representatives" ? "active" : ""
              }`}
            >
              <PersonIcon fontSize="large" />
              <span className="nav-text">Representatives</span>
            </li>
          </Link>
          <Link to={`/settings`}>
            <li
              className={`sidenav__list-item ${
                location.pathname === "/settings" ? "active" : ""
              }`}
            >
              <SettingsIcon fontSize="large" />
              <span className="nav-text">Settings</span>
            </li>
          </Link>
          <Link to={`/help-center`}>
            <li
              className={`sidenav__list-item ${
                location.pathname === "/help-center" ? "active" : ""
              }`}
            >
              <HelpIcon fontSize="large" />
              <span className="nav-text">Help Center</span>
            </li>
          </Link>
          <li className="sidenav__list-item">
            <LogoutIcon fontSize="large" />
            <span onClick={handleLogout} className="nav-text">
              Logout
            </span>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideNav;
