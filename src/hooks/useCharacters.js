import React, { useState, useEffect } from "react";
import Axios from "axios";
import { searchResults } from "../index";

/*
  Use effect allows us to execute certain function (or functions) each time  that our component renders.
*/
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL_NAME = `https://superheroapi.com/api.php/${API_KEY}/search/`;
const API_URL_ID = `https://superheroapi.com/api.php/${API_KEY}/`;

export const useCharacterSearcher = () => {
  const [characters, setCharacters] = useState([]);

  const searchCharactersFromApi = (value) => {
    return Axios.get(API_URL_NAME + value);
  };

  const searchResults = (value) => {
    searchCharactersFromApi(value)
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return { characters, searchResults };
};
