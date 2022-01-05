import React from "react";
import { useState } from "react";
import Character from "./Character";
import Button from "./Button";

const ListOfCharacters = ({ characters, onClick }) => {
  /* For our requirements, the hero/villains team must be in balance:
  3 good and 3 evil, so each time before we try to add a Hero, we must
  check it doesnt unbalance our team.
  */

  // checkAlignmentBalance = (heroes) => {
  // //   let good = 0;
  // //   let evil = 0;

  // //   heroes.forEach({hero}=>{

  // //   })
  // // };

  const buildCharacterResult = (character) => {
    return (
      <>
        <Character
          id={character.id}
          name={character.name}
          img={character.image.url}
          powerStats={Object.entries(character.powerstats)}
          alignment={character.biography.alignment}
        />
        <Button text="Add to Team" onClick={onClick}></Button>
      </>
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
