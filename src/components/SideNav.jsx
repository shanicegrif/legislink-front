import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { logOut } from "../services/firebase";
import brandLogo from "../assets/brand-logo.png";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import "./SideNav.css";

const SideNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const user = useAuth();

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
      <header class="header">
        <div className="header__username">Hi, {user.displayName}</div>
        <img src={user.photoURL} alt="user-image" />
      </header>
      <aside class={`sidenav ${isSidebarOpen ? "active" : ""}`}>
        <div class="sidenav__close-icon" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <CloseIcon fontSize="large" />
          ) : (
            <i class="fas fa-times sidenav__brand-close"></i>
          )}
        </div>
        <div className="brand-logo">
          <img src={brandLogo} alt="brand logo" />
        </div>
        <ul class="sidenav__list" onClick={closeSidebar}>
          <li className="sidenav__list-item">
            <Link to={`/dashboard`}>
              <HomeIcon fontSize="large" />
              <span className="nav-text">Dashboard</span>
            </Link>
          </li>
          <li className="sidenav__list-item">
            <Link>
              <WhereToVoteIcon fontSize="large" />
              <span className="nav-text">Polls</span>
            </Link>
          </li>
          <li className="sidenav__list-item">
            <Link to={`/bills`}>
              <ReceiptLongIcon fontSize="large" />
              <span className="nav-text">Bills</span>
            </Link>
          </li>
          <li className="sidenav__list-item">
            <Link to={`/representatives`}>
              <PersonIcon fontSize="large" />
              <span className="nav-text">Representatives</span>
            </Link>
          </li>
          <li className="sidenav__list-item">
            <Link to={`/settings`}>
              <SettingsIcon fontSize="large" />
              <span className="nav-text">Settings</span>
            </Link>
          </li>
          <li className="sidenav__list-item">
            <Link to={`/help-center`}>
              <HelpIcon fontSize="large" />
              <span className="nav-text">Help Center</span>
            </Link>
          </li>
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
