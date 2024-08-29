import React from "react";
import { Route, Routes } from "react-router-dom";
import { CharactersInfo, NavLinks } from "../components";
import { CharacterDetailPage } from "./home";
import CharacterSearchPage from "./home/character-search-page";
import CharacterListPage from "./home/characters-list-page";
import "../styles/home-page.css";

export function HomePage() {
  return (
    <div className="home-page">
      <NavLinks />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<CharactersInfo />} />
          <Route path="/characters" element={<CharacterListPage />} />
          <Route path="/characters/:id" element={<CharacterDetailPage />} />
          <Route path="/search" element={<CharacterSearchPage />} />
        </Routes>
      </div>
    </div>
  );
}
