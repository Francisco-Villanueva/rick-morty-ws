import React, { useState, useEffect } from "react";
import { CharacterCard } from "./character-card";
import { getCharacters } from "../services";

export function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await getCharacters();
        setCharacters(res.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
