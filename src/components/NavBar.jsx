import brandImg from "../assets/brand-img.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <img src={brandImg} alt="brand imglogo" />
        <div className="nav-title">LegisLink </div>
      </div>
      <div className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-links">
        <a>
          Home
        </a>
        <a href="http://stackoverflow.com/users/4084003/" target="_blank">
          About Us
        </a>
      </div>
    </div>
  );
}
