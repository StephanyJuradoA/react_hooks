import { useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "./components/ui/button";
import { useGetCharacters } from "./hooks/useGetCharacters";
import MortyList from "./components/mortyList";
import useSearchCharacter from "./hooks/useSearchCharacter";

// TODO: Separar todos los componentes del app
// TODO: Integrar react-router-dom

// https://pokeapi.co/api/v2/morty
function App() {
  // Use state siempre necesita un valor inicial

  const { characters, loading } = useGetCharacters();
  const { debounceQuery, handleChangeQuery, query } = useSearchCharacter();

  console.log("Data Morty", characters);
  console.log("Query", query);

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold text-center">
        Lista de Rick and Morty
      </h1>

      <Search query={query} handleChangeQuery={handleChangeQuery} />

      <Button variant="circle" size="icon">
        +
      </Button>

      <MortyList
        characters={characters}
        loading={loading}
        debounceQuery={debounceQuery}
      />
    </div>
  );
}

function Search({ query, handleChangeQuery }) {
  return (
    <input
      name="query"
      type="search"
      value={query}
      onChange={(e) => handleChangeQuery(e.target.value)}
    />
  );
}

//function MortyList({ data }) {
//  return (
//    <section className="grid gap-4 md:grid-col-2 lg:grid-cols-4">
//      {data.map((morty) => (
//        <MortyListItem
//          key={morty.id}
//          name={morty.name}
//          id={morty.id}
//          status={morty.status}
//        />
//      ))}
//    </section>
//  );
//}

//function MortyListItem({ name, id, status }) {
//  return (
//    <article className="p-4 border">
//      <a href={`/personaje/${id}`}>{name}</a>
//      <p>{status}</p>
//    </article>
//  );
//}

export default App;
