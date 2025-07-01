import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">Portfolio</a>
      </div>

      <ul className={`nav-links ${isActive ? "active" : ""}`}>
        <li>
          <a href="#">Pradžia</a>
        </li>
        <li>
          <a href="https://www.youtube.com/">Apie Mane</a>
        </li>
        <li>
          <a href="#">Projektai</a>
        </li>
        <li>
          <a href="#">Kontaktai</a>
        </li>
      </ul>

      <div
        className="menu-toggle"
        onClick={toggleMenu}
        style={{ cursor: "pointer" }}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default NavBar;
