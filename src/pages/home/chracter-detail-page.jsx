import React from "react";
import { useNavigate } from "react-router-dom";
import { CharacterDetails } from "../../components";

export function CharacterDetailPage() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>Volver</button>
      <CharacterDetails />
    </div>
  );
}
