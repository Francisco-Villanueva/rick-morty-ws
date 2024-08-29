import React from "react";
import { Route, Routes } from "react-router-dom";
import { CharacterList, CharactersInfo, NavLinks } from "../components";
import { CharacterDetails } from "../components/character-detail";
import "../styles/home-page.css";
import { CharacterDetailPage } from "./home";
import CharacterSearchPage from "./home/character-search-page";
import CharacterListPage from "./home/characters-list-page";

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
