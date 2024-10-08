import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="nav">
      <header className="header">Breweries Advertisement</header>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">My App</Link>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/form">Form</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
