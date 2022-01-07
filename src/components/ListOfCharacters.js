import React from "react";
import { useState } from "react";
import Character from "./Character";
import { Row } from "react-bootstrap";

const ListOfCharacters = ({ characters, onClick, addMember }) => {
  /* For our requirements, the hero/villains team must be in balance:
  3 good and 3 evil, so each time before we try to add a Hero, we must
  check it doesnt unbalance our team.
  */

  const buildCharacterResult = (character) => {
    return (
      <>
        <Character
          id={character.id}
          name={character.name}
          img={character.image.url}
          powerStats={Object.entries(character.powerstats)}
          alignment={character.biography.alignment}
          addMember={() => {
            // if (isTeamFull() && isTeamBalanced()) {
            addMember(character);
          }}
        />
      </>
    );
  };

  return (
    <Row className="mx-1">
      {characters &&
        characters.map((character) => {
          return buildCharacterResult(character);
        })}
    </Row>
  );
};

export default ListOfCharacters;
