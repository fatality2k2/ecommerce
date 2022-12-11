import React from "react";
import { Link } from "react-router-dom";
import Login from "./registration/Login";

export const Navbar = () => {
  return (
    <header>
      <nav className="links">
        <ul className="uloflinks">
          <li>
            <Link className="linkstyle" to="/">
              Shop
            </Link>
          </li>
          <li>
            <Link className="linkstyle" to="/essentials">
              Essentials
            </Link>
          </li>
          <li>
            <Link className="linkstyle2" to="/maccessentials">
              <p className="orange">Macc</p>
              <p>Essentials</p>
            </Link>
          </li>
          <li>
            <Link className="linkstyle" to="/bestsellers">
              BestSellers
            </Link>
          </li>
          <li>
            <Link className="linkstyle" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
/* <header>
      <nav className="links">
        <ul>
          <li>
            <Link  to="/">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/essentials">Essentials</Link>
          </li>
        </ul>
      </nav>
    </header>*/
