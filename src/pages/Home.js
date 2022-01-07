import React from "react";
import ListOfCharacters from "../components/ListOfCharacters";
import Context from "../context/AuthContext";

function Home() {
  return (
    <>
      <h1>Blabla</h1>
      <ListOfCharacters
        characters={JSON.parse(localStorage.getItem("heroTeam"))}
      ></ListOfCharacters>
    </>
  );
}

export default Home;
