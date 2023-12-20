import React from "react";

function CharacterList({ id, name, status }) {
  return (
    <div>
      {/*{data.map((character) => (*/}
      <article className="p-4 border ">
        <a href={`/personaje/${id}`}>{name}</a>
        <p>{status}</p>
      </article>
      {/*))}*/}
    </div>
  );
}

export default CharacterList;
