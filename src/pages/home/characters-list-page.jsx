import React, { useEffect, useState } from "react";
import { getCharacters } from "../../services";
import { CharacterList, Pagination } from "../../components";
import { useLocation } from "react-router-dom";
export default function CharacterListPage() {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await getCharacters(page);
        setCharacters(res.results);
        setTotalPages(res.info.pages);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, [page]);
  return (
    <div>
      <CharacterList characters={characters} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
