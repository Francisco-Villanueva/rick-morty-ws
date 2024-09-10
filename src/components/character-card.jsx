import React from "react";
import { useNavigate } from "react-router-dom";

// TODO: fijarse que las props NO son iguales a las de la API, resolver con adapter.
export function CharacterCard({ character }) {
  const nav = useNavigate();

  return (
    <div
      className="character-card"
      onClick={() => {
        nav(`/home/characters/${character.id}`);
      }}
    >
      <img src={character.imagen} alt={character.nombre} />
      <section>
        <h3>{character.nombre}</h3>
        <p>Status: {character.estado}</p>
        <p>Species: {character.especie}</p>
      </section>
    </div>
  );
}
