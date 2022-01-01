import React, { useState, useEffect } from "react";
import Axios from "axios";
import { searchResults } from "../index";
import searchCharactersFromApi from "../services/searchCharactersFromApi";

/*
  Use effect allows us to execute certain function (or functions) each time 
  that our component renders.
*/

export const useCharacterSearcher = () => {
  // useState = [value, updateValue];
  const [characters, setCharacters] = useState([]);

  const searchResults = (value) => {
    // Set Loading true
    searchCharactersFromApi(value)
      .then((response) => {
        setCharacters(response.data.results);
        // set Loading False
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return {
    //  return ternary: loading ? spiner : characters;
    characters,
    searchResults,
  };
};
