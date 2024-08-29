import React from "react";
import { Link } from "react-router-dom";

export const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <h1>Welcome to Rick and Morty Characters</h1>
      <p>Explore the multiverse and discover your favorite characters!</p>
      <Link to={"/home"}>
        <button>Start Exploring</button>
      </Link>
    </div>
  );
};
