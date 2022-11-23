import React, { useEffect, useState } from 'react';

// Data Fetching with useEffect
export default function App() {
  const [myPokemon, setMyPokemon] = useState([]);

  // The empty dependency array (the second parameter of useEffect()) means, that this will only run, when the component is rendered for the first time
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon-species/7/')
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setMyPokemon(data);
      });
    }, []);

  return (
    <div>
      <h2>My favorite Pokemon: {myPokemon.name}</h2>
    </div>
  );
}
