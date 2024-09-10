import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// TODO
// Este componente muestra los detalles de un personaje específico
// Utiliza el ID del personaje de los parámetros de la URL para obtener y mostrar la información
export function CharacterDetails() {
  // Crear estado para almacenar los datos del personaje y un estado de carga para mostrar un 'loading'

  // Obtiene el ID del personaje de los parámetros de la URL
  const { id } = useParams();
  useEffect(() => {
    // Función para obtener los datos del personaje de la API
    const fetchCharacterInfo = async () => {
      try {
        // ESTO HAY QUE MOVERLO A LA CAPA DE SERVICIOS!
        const res = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        console.log("Character info: ", res);
      } catch (error) {
        console.error("Error fetching character details:", error);
      }
    };

    fetchCharacterInfo();
  }, [id]); // Se ejecuta cada vez que cambia el ID

  // Renderiza los detalles del personaje
  return (
    <div className="character-details">
      Detalles del personaje con el id: {id}
    </div>
  );
}
