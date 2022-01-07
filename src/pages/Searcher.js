import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useCharacterSearcher } from "../hooks/useCharacters";
import Character from "../components/Character";
import ListOfCharacters from "../components/ListOfCharacters";
import { useContext } from "react";
import Context from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";

// import { searchcharacteresFromApi } from ".";

// };

// JSX is an HTML-like syntax used by React that extends ECMAScript
//  so that HTML-like text  can co-exist with JavaScript/React code.

function Searcher() {
  const { characters, searchResults } = useCharacterSearcher();
  const [team, setTeam] = useState([]);

  // States:
  //The state's hooks allows us to update the state of certain component.
  const [searchValue, setSearchValue] = useState();

  /* For our requirements, the hero/villains team must be in balance:
   3 good and 3 evil, so each time before we try to add a Hero, we must
    check it doesnt unbalance our team.
  */
  // const [alignment, setAlignment] = useState([{ good: 0 }, { evil: 0 }]);

  //TO DO: Refactorize function once app is over.
  const isTeamBalanced = (character) => {
    let good = 0;
    let bad = 0;
    const limit = 3;

    team.forEach((character) => {
      if (character.biography.alignment === "good") {
        good += 1;
      } else {
        bad += 1;
      }
    });

    if (character.biography.alignment === "good") {
      return good < limit;
    }

    if (character.biography.alignment === "bad") {
      return bad < limit;
    }
  };

  const isTeamSlotFree = () => {
    return team.length < 6;
  };

  const addMember = (character) => {
    if (isTeamSlotFree() && isTeamBalanced(character)) {
      setTeam([...team, character]);
    }
  };

  const handleChange = (e) => {
    searchResults(e.target.value);
  };

  //To Do: Pop up de falta de permisos / redireccion
  // Check if user is logged in:
  const auth = useContext(Context);
  if (!auth) {
    return <Navigate to="login" />;
  }

  // Read about Json stringify / Json parse
  // JSON.stringify parses our array of objects (team) into a string so our localstorage can read it properly.
  // JSON.parse does the opposite, converts an string into an object.
  const handleClick = (e) => {
    localStorage.setItem("heroTeam", JSON.stringify(team));
  };

  // We need to set the routes and the pages right here, at the main App.
  // Our app file structure will be the following: pages/page-name/page-components.
  // Add pathing (with Router)

  if (auth) {
    return (
      <Container className="my-2">
        <div>
          <h2>Team Preview</h2> <Button onClick={handleClick}>Save Team</Button>
        </div>
        <div>
          {
            <ListOfCharacters
              characters={JSON.parse(localStorage.getItem("heroTeam"))}
            />
          }
        </div>
        <h2>Team Builder</h2>
        <p>
          {" "}
          Search for your favourite heroes or villains and add them to your
          team! You can only have three characters from each band.
        </p>
        <input type="text" value={searchValue} onChange={handleChange}></input>
        <div>
          {<ListOfCharacters characters={characters} addMember={addMember} />}
        </div>
      </Container>
    );
  }
}

export default Searcher;
