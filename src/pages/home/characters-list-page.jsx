import React, { useEffect, useState } from "react";
import { getCharacters } from "../../services";
import { CharacterList, Pagination } from "../../components";
import { useLocation } from "react-router-dom";

// Este componente maneja la lista de personajes y su paginación
export default function CharacterListPage() {
  // Estado para almacenar la lista de personajes y el número total de páginas
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState([]);

  // Obtiene la ubicación actual y los parámetros de búsqueda
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page");

  // Efecto para cargar los personajes cuando cambia la página
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        // Obtiene los personajes de la API
        const res = await getCharacters(page);
        // Actualiza el estado con los resultados y el total de páginas
        setCharacters(res.results);
        setTotalPages(res.info.pages);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, [page]);

  // Renderiza la lista de personajes y los controles de paginación
  return (
    <div>
      <CharacterList characters={characters} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
