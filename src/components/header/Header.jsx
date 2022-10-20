import React from "react";
import "./header.css";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark headerNav">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a href="#features" className="nav-link">
                Browse
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Details
              </a>
            </li>
            <li className="nav-item">
              <a href="#faq" className="nav-link">
                Streams
              </a>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
