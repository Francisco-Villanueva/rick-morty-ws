import React, { useState, useEffect } from "react";
import { CharacterCard } from "./character-card";

export function CharacterList({ characters = [] }) {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
