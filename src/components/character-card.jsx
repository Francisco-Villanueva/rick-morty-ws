import React from "react";
import { useNavigate } from "react-router-dom";

export function CharacterCard({ character }) {
  const nav = useNavigate();

  return (
    <div
      className="character-card"
      onClick={() => {
        nav(`/home/characters/${character.id}`);
      }}
    >
      <img src={character.image} alt={character.name} />
      <section>
        <h2>{character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
      </section>
    </div>
  );
}
