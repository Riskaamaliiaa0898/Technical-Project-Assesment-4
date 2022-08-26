import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            ****
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AboutMe" className="nav-link active" aria-current="page">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Portofolio" className="nav-link">
                  Portofolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Blog" className="nav-link">
                  Blog
                </Link>
              </li>
            </ul>
            <span className="navbar-text">WEB PERSONAL</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
