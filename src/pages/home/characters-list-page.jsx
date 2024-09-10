import React, { useEffect } from "react";
import { CharacterList } from "../../components";
import axios from "axios";

// TODO:Este componente maneja la lista de personajes y su paginación. Tenemos que hacer algunos arreglos en él.
export default function CharacterListPage() {
  // Crear stado para almacenar la lista de personajes.

  // Efecto para cargar los personajes cuando cambia la página
  useEffect(() => {
    // Función para obtener los datos de todos los personajes
    const fetchCharacters = async () => {
      try {
        // ESTO HAY QUE MOVERLO A LA CAPA DE SERVICIOS!
        const res = await axios.get(
          `https://rickandmortyapi.com/api/character`
        );

        // Ver el resultado por consola, o pegar el endpoint en el navegador, para ver cómo consumir bien los datos!
        console.log(res);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <CharacterList
      // characters={ EN ESTA PROP TENGO QUE PASARLE EL LISTADO DE PERSONAJES A REENDERIZAR!}
      />
    </div>
  );
}
