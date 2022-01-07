import React from "react";
import { useState } from "react";
import Character from "./Character";
import { Row } from "react-bootstrap";

const ListOfCharacters = ({
  characters,
  onClick,
  addMember,
  deleteMember,
  showHeroDetails,
  teamMember,
  teamList,
  // showDetails,
}) => {
  // Renderizes our characters.

  // ● Peso.
  // ● Altura.
  // ● Nombre.
  // ● Alias.
  // ● Color de ojos.
  // ● Color de cabello.
  // ● Lugar de trabajo
  const buildCharacter = (character, teamMember) => {
    const details = {
      alias: character.biography.aliases[0],
      height: character.appearance.height[0],
      weight: character.appearance.weight[0],
      eyes: character.appearance["eye-color"],
      hair: character.appearance["hair-color"],
      workplace: character.work.base.split(" ")[0],
    };
    return (
      <Character
        id={character.id}
        name={character.name}
        img={character.image.url}
        powerStats={Object.entries(character.powerstats)}
        alignment={character.biography.alignment}
        details={Object.entries(details)}
        addMember={() => {
          addMember(character);
        }}
        deleteMember={() => {
          deleteMember(character);
        }}
        showHeroDetails={() => {
          showHeroDetails(character);
        }}
        teamMember={teamMember}
        biography={character.biography}
        // showDetails={showDetails}
      />
    );
  };

  if (teamList) {
    return (
      <Row className="mx-1 d-flex justify-content-center">
        {characters &&
          characters.map((character) => {
            return buildCharacter(character, true);
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
      <Row className="mx-1 d-flex justify-content-center">
        {characters &&
          unselectedCharacters().map((character) => {
            return buildCharacter(character, false);
          })}
      </Row>
    );
  }
};

export default ListOfCharacters;
