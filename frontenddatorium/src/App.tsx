import './App.css'
import CharactersList from "./features/characters/CharactersList";
import * as React from "react";

function App() {
    return (
        <div className="bg-white text-black min-h-screen">
            <h1 className="text-3xl font-bold text-center p-4">
                "Rick and Morty" seriāla varoņu katalogs
            </h1>

            <CharactersList />
        </div>
    );
}

export default App;