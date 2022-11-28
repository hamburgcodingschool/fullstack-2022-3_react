import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  font-weight: 700;
`;

function PokemonProfileCard({ id: pokemonId }) {
  const [pokemon, setPokemon] = useState({});
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const pokemonFromStorage = JSON.parse(
      window.localStorage.getItem(pokemonId)
    );

    if (!pokemonFromStorage) {
      console.log("Fetching new Pokemon from API");
      const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
      fetch(endpoint)
        .then((result) => result.json())
        .then((resultJson) => {
          if (resultJson) {
            const pokemonObject = {
              name: resultJson?.name,
              sprite:
                resultJson?.sprites?.other["official-artwork"]?.front_default,
              types: resultJson?.types?.map((data) => data.type.name),
              abilities: resultJson?.abilities?.map(
                (data) => data.ability.name
              ),
            };
            setPokemon(pokemonObject);
            window.localStorage.setItem(
              pokemonId,
              JSON.stringify(pokemonObject)
            );
          }
        })
        .catch((error) => {
          console.error("Something went wrong", error);
          setFetchError(true);
        });
    } else {
      console.log("Found Pokemon in localStorage");
      setPokemon(pokemonFromStorage);
    }
  }, [pokemonId]);

  return (
    !fetchError && (
      <div className={`flex flex-col border-2 items-center p-2 gap-4`}>
        <img src={pokemon?.sprite} alt={pokemon?.name} className="w-36" />
        <StyledTitle>{pokemon?.name?.toUpperCase()}</StyledTitle>
        <p className="text-center">
          Abilities:
          <br />
          {pokemon?.abilities?.join(",")}
        </p>
        <p className="text-center">
          Type:
          <br />
          {pokemon?.types?.join(",")}
        </p>
      </div>
    )
  );
}

export default PokemonProfileCard;
