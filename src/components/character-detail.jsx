import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../services";

export function CharacterDetails() {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      try {
        const data = await getCharacterById(id);
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character details:", error);
        setError("Failed to load character details");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!character) {
    return <div>No se encontró el personaje</div>;
  }

  return (
    <div className="character-details">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
    </div>
  );
}
