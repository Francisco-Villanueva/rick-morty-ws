import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../services";

// Este componente muestra los detalles de un personaje específico
// Utiliza el ID del personaje de los parámetros de la URL para obtener y mostrar la información
export function CharacterDetails() {
  // Estado para almacenar los datos del personaje, el estado de carga y los errores
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Obtiene el ID del personaje de los parámetros de la URL
  const { id } = useParams();

  useEffect(() => {
    // Función para obtener los datos del personaje de la API
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
  }, [id]); // Se ejecuta cada vez que cambia el ID

  // Muestra un mensaje de carga mientras se obtienen los datos
  if (loading) {
    return <div>Cargando...</div>;
  }

  // Muestra un mensaje de error si ocurre algún problema
  if (error) {
    return <div>{error}</div>;
  }

  // Muestra un mensaje si no se encuentra el personaje
  if (!character) {
    return <div>No se encontró el personaje</div>;
  }

  // Renderiza los detalles del personaje
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
