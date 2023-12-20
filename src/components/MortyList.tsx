import React, { useMemo } from "react";
import CharacterList from "./CharacterList";

function MortyList({ characters, loading, debounceQuery }) {
  const filterCharacters = useMemo(() => {
    let filtered = [...characters];
    if (debounceQuery) {
      filtered = characters.filter((c) =>
        c.name.toLowerCase().includes(debounceQuery.toLowerCase())
      );
    }
    return filtered;
  }, [characters, debounceQuery]);

  return (
    <section className="grid gap-4 md:grid-col-2 lg:grid-cols-4">
      {loading && <div>Cargando</div>}
      {!loading && filterCharacters.length === 0 && (
        <div>No existen personajes</div>
      )}
      {!loading &&
        filterCharacters.length > 0 &&
        characters.map((morty) => (
          <CharacterList
            data={morty.filterCharacters}
            name={morty.name}
            status={morty.status}
          />
        ))}
    </section>
  );
}

export default MortyList;
