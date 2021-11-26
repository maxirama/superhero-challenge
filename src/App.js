import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik } from "formik";
import styled from "styled-components";
import { useHeroSearcher } from "./hooks/useHeroes";
import { FormControl } from "react-bootstrap";
// import { searchHeroesFromApi } from ".";

//  TOKEN

function App() {
  const { heroes, searchResults } = useHeroSearcher();
  const [value, setValue] = useState();

  const buildHeroResult = (hero) => {
    return (
      <div>
        {hero.name}
        <img src={hero.image?.url}></img>
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
      <FormControl
        placeholder="Username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <FormControl
        placeholder="Password"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <div></div>
      <input type="text" value={value} onChange={handleChange}></input>
      <div>
        {console.log(heroes)} What is happening{" "}
        {heroes &&
          heroes.map((hero) => {
            return buildHeroResult(hero);
          })}
        {""}?{" "}
      </div>
    </>
  );
}
export default App;
