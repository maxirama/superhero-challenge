import React from "react";
import { useState } from "react";
import Character from "./Character";
import { Row } from "react-bootstrap";

const ListOfCharacters = ({ characters, onClick, addMember, teamList }) => {
  // Renderizes our characters.
  const buildCharacter = (character) => {
    return (
      <Character
        id={character.id}
        name={character.name}
        img={character.image.url}
        powerStats={Object.entries(character.powerstats)}
        alignment={character.biography.alignment}
        addMember={() => {
          addMember(character);
        }}
      />
    );
  };
  if (teamList) {
    return (
      <Row className="mx-1">
        {characters &&
          characters.map((character) => {
            return buildCharacter(character);
          })}
      </Row>
    );
  }
  // Function to check if the character is already selected in our team.
  const isInTeam = (id) => {
    const team = JSON.parse(localStorage.getItem("heroTeam"));
    let isInTeam = false;
    team.forEach((character) => {
      if (character.id === id) {
        isInTeam = true;
      }
    });
    console.log(`${id} is in team?`);
    return isInTeam;
  };

  // Function to filter the characters that are unselected.
  const unselectedCharacters = () => {
    const unselectedCharacters = characters.filter(
      (character) => !isInTeam(character.id)
    );

    return unselectedCharacters;
  };

  //If the list of characters we are working with doesnt belongs to a team list, render this
  if (!teamList) {
    return (
      <Row className="mx-1">
        {characters &&
          unselectedCharacters().map((character) => {
            return buildCharacter(character);
          })}
      </Row>
    );
  }
};

export default ListOfCharacters;
