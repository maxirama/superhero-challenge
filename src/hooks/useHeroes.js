import React, { useState, useEffect } from "react";
import Axios from "axios";
import { searchResults } from "../index";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL_NAME = `https://superheroapi.com/api.php/${API_KEY}/search/`;
const API_URL_ID = `https://superheroapi.com/api.php/${API_KEY}/`;

export const useHeroSearcher = () => {
  const [heroes, setHeroes] = useState([]);

  const searchHeroesFromApi = (value) => {
    return Axios.get(API_URL_NAME + value);
  };

  const searchResults = (value) => {
    searchHeroesFromApi(value)
      .then((response) => {
        setHeroes(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return { heroes, searchResults };
};
