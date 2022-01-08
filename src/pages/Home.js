import { React, useState, useContext } from "react";
import ListOfCharacters from "../components/ListOfCharacters";
import { Container } from "react-bootstrap";
import Context from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function Home() {
  const [team, setTeam] = useState(
    JSON.parse(localStorage.getItem("heroTeam")) || []
  );

  const deleteMember = (character) => {
    const id = character.id;
    setTeam(
      team.filter((character) => {
        return character.id !== id;
      })
    );
    localStorage.setItem("heroTeam", JSON.stringify(team));
  };

  const averagePowerstats = () => {
    const teamStats = [];

    const totalStats = {
      intelligence: 0,
      strength: 0,
      speed: 0,
      durability: 0,
      power: 0,
      combat: 0,
    };

    let currentStat = [];
    team.forEach((hero) => {
      teamStats.push(Object.entries(hero.powerstats));
    });

    teamStats.forEach((hero) => {
      hero.forEach((stat) => {});
      // currentStat = hero[0].split(",");
      // console.log(`hero[0]: ${hero[0]} , hero[1]: 0`);
    });
    return totalStats;
  };

  const auth = useContext(Context);

  if (!auth) {
    return <Navigate to="/login" />;
  }

  if (auth) {
    console.log(averagePowerstats());
    return (
      <>
        <Container className="my-2">
          <Container className="d-flex flex-column py-3">
            <h1 className="text-center py-3">Welcome to SuperHero Teams</h1>
            <h2 className="py-3 mx-4">Average powerstats</h2>
            <Container></Container>
            <h2 className="py-3 mx-4"> Your Team </h2>
            {team.length !== 0 ? (
              <ListOfCharacters
                teamList={true}
                characters={JSON.parse(localStorage.getItem("heroTeam"))}
                deleteMember={deleteMember}
              ></ListOfCharacters>
            ) : (
              <Container className="text-center">
                You have not selected heroes yet. Go to the search section and
                start building your team!
              </Container>
            )}
          </Container>
        </Container>
      </>
    );
  }
}

export default Home;
