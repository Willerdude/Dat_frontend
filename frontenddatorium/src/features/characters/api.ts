import axios from "axios";
import type { Character } from "./types";

const API_URL = "https://rickandmortyapi.com/api/character";

export const fetchCharacters = async (name: string = ""): Promise<Character[]> => {
  const url = name ? `${API_URL}/?name=${encodeURIComponent(name)}` : API_URL;
  try {
    const response = await axios.get<{ results: Character[] }>(url);
    return response.data.results ?? [];
  } catch (error: unknown) {
    console.warn("fetchCharacters error:", error);
    return [];
  }
};