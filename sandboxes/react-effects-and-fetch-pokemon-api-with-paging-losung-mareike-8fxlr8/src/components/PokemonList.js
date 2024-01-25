import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0"
  );
  const [pageInfo, setPageInfo] = useState({
    next: null,
    previous: null,
    offset: 0,
  });

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(page);
        const data = await response.json();
        console.log(data);
        setPokemon(data.results);
        setPageInfo({
          next: data.next,
          previous: data.previous,
          offset: pageInfo.offset,
        });
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemon();
  }, [page]);

  return (
    <main>
      <button
        type="button"
        className={pageInfo.previous === null ? "hidden" : ""}
        onClick={() => {
          setPage(pageInfo.previous);
          setPageInfo({
            offset: pageInfo.offset - 20,
          });
        }}
      >
        Previous Page
      </button>
      <button
        type="button"
        className={pageInfo.next === null ? "hidden" : ""}
        onClick={() => {
          setPage(pageInfo.next);
          setPageInfo({
            offset: pageInfo.offset + 20,
          });
        }}
      >
        Next Page
      </button>
      <p>
        Pokemon {pageInfo.offset} - {pageInfo.offset + 20}
      </p>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
