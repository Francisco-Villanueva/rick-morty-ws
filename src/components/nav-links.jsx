import React from "react";
import { Link } from "react-router-dom";

export const NavLinks = () => {
  return (
    <nav className="sidebar">
      <ul className="nav-links">
        <li>
          <Link to="/">Welcome</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/home/characters">Characters</Link>
        </li>
        <li>
          <Link to="/home/search">Search</Link>
        </li>
      </ul>
    </nav>
  );
};
