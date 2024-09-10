import React from "react";
import { CharacterCard } from "./character-card";

// TODO ¿Qué pasa si no llega data? Deberiamos mostrar en pantalla que no hay informacion para mostrar!
export function CharacterList({ characters = [] }) {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
