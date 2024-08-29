import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function CharacterSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get("name");
    if (name) {
      setSearchTerm(name);
    }
  }, [location.search]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/home/search?name=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate("/home/search");
    }
  };

  return (
    <form onSubmit={handleSearch} className="character-search">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search characters..."
      />
      <button type="submit">Search</button>
    </form>
  );
}
