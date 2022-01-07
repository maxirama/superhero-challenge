import React from "react";
import ListOfCharacters from "../components/ListOfCharacters";
import { Container } from "react-bootstrap";
import Context from "../context/AuthContext";

function Home() {
  return (
    <>
      <Container className="my-3">
        <h1>Your Team</h1>
        <ListOfCharacters
          teamList={true}
          characters={JSON.parse(localStorage.getItem("heroTeam"))}
        ></ListOfCharacters>
      </Container>
    </>
  );
}

export default Home;
