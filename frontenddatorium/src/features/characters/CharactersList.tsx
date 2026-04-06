import React, { useEffect, useState } from "react";
import { fetchCharacters } from "./api";
import type { Character } from "./types";
import CharacterCard from "./CharactersCard";

const CharactersList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      setLoading(true);
      const data = await fetchCharacters(searchTerm);
      if (!mounted) return;
      if (!searchTerm) {
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setCharacters(shuffled.slice(0, 8));
      } else {
        setCharacters(data);
      }
      setLoading(false);
    };

    const timeoutId = setTimeout(loadData, 500);
    return () => {
      mounted = false;
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-10 flex justify-center">
        <input
          type="text"
          placeholder="Meklēt varoni pēc vārda..."
          className="w-full max-w-md p-3 border-2 border-gray-300 rounded-full focus:border-blue-500 outline-none shadow-sm transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="text-center text-xl font-semibold">Ielādē varoņus...</div>
      ) : characters.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      ) : (
        <div className="text-center text-red-500">Nekas netika atrasts!</div>
      )}
    </div>
  );
};

export default CharactersList;