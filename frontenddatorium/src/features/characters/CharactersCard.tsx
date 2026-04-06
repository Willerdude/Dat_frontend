import React from "react";
import type { Character } from "./types";

const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
  const statusColor =
    character.status === "Alive"
      ? "bg-green-500"
      : character.status === "Dead"
      ? "bg-red-500"
      : "bg-gray-400";

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="w-full">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="p-4 text-center flex-grow flex flex-col justify-center">
        <h2 className="font-bold text-xl mb-1">{character.name}</h2>
        <p className="text-gray-500 text-sm">{character.species}</p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <span className={`h-2 w-2 rounded-full ${statusColor}`} />
          <span className="text-sm font-medium">{character.status}</span>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;