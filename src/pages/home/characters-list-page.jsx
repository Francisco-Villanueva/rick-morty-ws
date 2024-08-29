import React, { useEffect, useState } from "react";
import { getCharacters } from "../../services";
import { CharacterList } from "../../components";

export default function CharacterListPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await getCharacters();
        setCharacters(res.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);
  return (
    <div>
      <CharacterList characters={characters} />
    </div>
  );
}
