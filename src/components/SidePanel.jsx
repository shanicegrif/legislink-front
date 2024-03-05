import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { logOut } from "../serivces/firebase";

export default function SidePanel() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const nav = useNavigate();

  const toggleSidebar = () => {
    console.log("Sidebar toggled");
    setIsSidebarOpen(!isSidebarOpen);
  }

  const handleLogout = () => {
    try {
        logOut().then(() =>nav('/'));
        
    } catch(err){
        console.log(err);
    };
  }
  return (
    <>
        <div className="menu-icon" onClick={toggleSidebar}>
            <i className="fas fa-bars header__menu">SIDE PANEL WILL POP Out WHEN YOU CLICK IT</i>
        </div>

          <aside className={`sidenav ${isSidebarOpen ? "active" : ""}`}>
            <div className="sidenav__close-icon">
              <i className="fas fa-times sidenav__brand-close"></i>
            </div>
            <div>
              <div className="brand-logo">
                <img src="" alt="brand logo" />
              </div>
              <ul className="sidenav__list">
                <li className="sidenav__list-item">
                  <Link to={`/dashboard`}>
                    <img
                      src="https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/jellystat-light.png"
                      alt="dashboard"
                    />
                    <span className="nav-text">Dashboard</span>
                  </Link>
                </li>
                <li className="sidenav__list-item">
                  <Link>
                    <img
                      src="https://www.svgrepo.com/show/374976/metrics.svg"
                      alt="polls"
                    />
                    <span className="nav-text">Polls</span>
                  </Link>
                </li>
                <li className="sidenav__list-item">
                  <Link to={`/bills`}>
                    <img
                      src="https://media.istockphoto.com/id/1321765738/vector/legal-paper-line-icon.jpg?s=612x612&w=0&k=20&c=TYXgaVxpYQL0-Psvmw8NrioW70lmUsDYnaeqqyKqEik="
                      alt="bills"
                    />
                    <span className="nav-text">Bills</span>
                  </Link>
                </li>
                <li className="sidenav__list-item">
                  <Link to={`/representatives`}>
                    <img
                      src="data:image/png;base64,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"
                      alt="representatives"
                    />
                    <span className="nav-text">Representatives</span>
                  </Link>
                </li>
              </ul>
              <ul className="sidenav__list_two">
                <li className="sidenav__list-item">
                  <Link>
                    <img
                      src="https://i.pinimg.com/474x/6b/d3/8a/6bd38aa501f07e08932445c0f8432219.jpg"
                      alt="settings"
                    />
                    <span className="nav-text">Settings</span>
                  </Link>
                </li>

                <li className="sidenav__list-item">
                  <a href="#">
                    <img
                      src="https://cdn.icon-icons.com/icons2/3413/PNG/512/language_icon_217771.png"
                      alt="language"
                    />
                    <span className="nav-text">Language</span>
                  </a>
                </li>

                <li className="sidenav__list-item" 
                    onClick={handleLogout}>
                  <Link></Link>
                  <a href="#">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKL3J2zdqzLTlOP9JX0Ft42Xl_U3CLMQS8bw&usqp=CAU"
                      alt="logout"
                    />
                    <span className="nav-text">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          <header className="header">
            <div className="header__username">User Name</div>
            <img
              src="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png"
              alt="user-image"
            />
          </header>
        </>
  );
}