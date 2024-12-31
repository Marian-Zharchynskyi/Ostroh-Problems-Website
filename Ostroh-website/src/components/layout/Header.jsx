import React from "react";
import { Link } from "react-router-dom";
import "./layout.css";

const Header = () => {
  return (
    <header className="bg-primary text-white py-3 w-100">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h3 mb-0">Ostroh Problems Website</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/cityMap">Ostroh</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
