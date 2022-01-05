import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCharacterSearcher } from "../hooks/useCharacters";
import Character from "../components/Character";
import ListOfCharacters from "../components/ListOfCharacters";
import { useContext } from "react";
import Context from "../context/AuthContext";
import { Navigate } from "react-router-dom";

// import { searchcharacteresFromApi } from ".";

// };

// JSX is an HTML-like syntax used by React that extends ECMAScript
//  so that HTML-like text can co-exist with JavaScript/React code.

function Home() {
  const { characters, searchResults } = useCharacterSearcher();
  // States:
  //The state's hooks allows us to update the state of certain component.
  const [searchValue, setSearchValue] = useState();

  /* For our requirements, the hero/villains team must be in balance:
   3 good and 3 evil, so each time before we try to add a Hero, we must
    check it doesnt unbalance our team.
  */
  const [heroTeam, setHeroTeam] = useState([]);
  // const [alignment, setAlignment] = useState([{ good: 0 }, { evil: 0 }]);

  const updateTeamBalance = (heroes) => {
    heroes.forEach((hero) => {});

    // In react, when we make an element's list, each child must have an unique KEY.
    //This allows react to identify in a list the elements that its rendering

    // Event handling function: we will use this function to specifie our  component
    // how to handle the input change event.
  };

  const handleClick = () => {
    return console.log("Hola");
  };

  const handleChange = (e) => {
    searchResults(e.target.value);
  };

  // Pop up de falta de permisos / redireccion
  const auth = useContext(Context);
  if (!auth) {
    return <Navigate to="login" />;
  }

  // We need to set the routes and the pages right here, at the main App.
  // Our app file structure will be the following: pages/page-name/page-components.
  // Add pathing (with Router)

  if (auth) {
    return (
      <>
        <h1>Home</h1>
        <input type="text" value={searchValue} onChange={handleChange}></input>
        <div>
          {<ListOfCharacters characters={characters} onClick={handleClick} />}
        </div>
      </>
    );
  }
}

export default Home;
