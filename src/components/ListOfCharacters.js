import React from "react";
import Character from "./Character";

const ListOfCharacters = ({ characters }) => {
  const buildCharacterResult = (character) => {
    return (
      <Character
        id={character.id}
        name={character.name}
        img={character.image.url}
        powerStats={Object.entries(character.powerstats)}
      />
    );
  };

  return (
    <div>
      {characters &&
        characters.map((character) => {
          return buildCharacterResult(character);
        })}
    </div>
  );
};

export default ListOfCharacters;
