import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";
import styled from "styled-components";
import { useHeroSearcher } from "./hooks/useHeroes";
import { FormControl } from "react-bootstrap";
import Signup from "./components/Signup";
// import { searchHeroesFromApi } from ".";

//  TOKEN

function App() {
  const { heroes, searchResults } = useHeroSearcher();
  const [value, setValue] = useState();

  const buildHeroResult = (hero) => {
    return (
      <div>
        {hero.name}
        <img src={hero.image.url}></img>
        {Object.entries(hero.powerstats).map((stat) => {
          const [key, value] = stat;
          return `${key.toUpperCase()} : ${value} `;
        })}
      </div>
    );
  };

  const handleChange = (e) => {
    searchResults(e.target.value);
  };

  return (
    <>
      <Signup />
      <div>Separating inputs</div>
      <input type="text" value={value} onChange={handleChange}></input>
      <div>
        {heroes &&
          heroes.map((hero) => {
            return buildHeroResult(hero);
          })}
      </div>
    </>
  );
}
export default App;
