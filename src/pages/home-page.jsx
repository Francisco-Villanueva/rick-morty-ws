import React from "react";
import { Route, Routes } from "react-router-dom";
import { CharacterList, NavLinks } from "../components";
import { CharacterDetails } from "../components/character-detail";
import "../styles/home-page.css";
import { CharacterDetailPage } from "./home";

export function HomePage() {
  return (
    <div className="home-page">
      <NavLinks />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/characters/:id" element={<CharacterDetailPage />} />
        </Routes>
      </div>
    </div>
  );
}
