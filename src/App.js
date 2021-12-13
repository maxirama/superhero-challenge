import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik } from "formik";
import * as yup from "yup";
import styled from "styled-components";
import { useCharacterSearcher } from "./hooks/useCharacters";
import { FormControl } from "react-bootstrap";
import Signup from "./components/Signup";
import { BrowserRouter, Link, Route, Switch } from "react-router";
import Character from "./components/Character";
import ListOfCharacters from "./components/ListOfCharacters";
// import { searchcharacteresFromApi } from ".";

//  TOKEN
// Use PascalCase to declare components.
// React can only render one element at a time, to render multiple elements at the same
// level, we need to use react's fragments <></>

// const NavBar = () => {
//   // If we want our React router to work, we need to enclose our router elements in a Router tag, in this case, we use BrowserRouter tag.
//   // Route component i.e: <Route path='login'><Home/></Route> : Check the path, and then render in case that matches.
//   // Switch components: prevents multiple pathing, and renders only the first path match.
//   return (
//     <>
//       <BrowserRouter>
//         <Link to="/login">Login</Link>
//         <Link to="/home">Home</Link>
//       </BrowserRouter>

//       <Switch>
//         <Route path="/login">{/* <Login/> */}</Route>
//         <Route path="/home">{/*<Home/>*/}</Route>
//       </Switch>
//     </>
//   );
// };

// JSX is an HTML-like syntax used by React that extends ECMAScript
//  so that HTML-like text can co-exist with JavaScript/React code.

function App() {
  const { characters, searchResults } = useCharacterSearcher();
  // States:
  //The state's hooks allows us to update the state of certain component.
  const [searchValue, setSearchValue] = useState();

  // In react, when we make an element's list, each child must have an unique KEY.
  //This allows react to identify in a list the elements that its rendering

  // Event handling function: we will use this function to specifie our  component
  // how to handle the input change event.
  const handleChange = (e) => {
    searchResults(e.target.value);
  };

  // We need to set the routes and the pages right here, at the main App.
  // Our app file structure will be the following: pages/page-name/page-components.
  return (
    <>
      <Signup />
      <div>Separating inputs</div>
      <input type="text" value={searchValue} onChange={handleChange}></input>
      <div>{<ListOfCharacters characters={characters} />}</div>
    </>
  );
}

export default App;
