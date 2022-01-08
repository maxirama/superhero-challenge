import React from "react";
import { Container, ListGroup, Card } from "react-bootstrap";

// intelligence: 0,
// strength: 0,
// speed: 0,
// durability: 0,
// power: 0,
// combat: 0,
// height: 0,
// weight: 0,
const AverageCard = ({ stats }) => {
  const finalStats = Object.entries(stats);
  console.log(finalStats);
  return (
    <Card
      style={{ width: "18rem" }}
      className="shadow-lg my-2 p-2 border-2 border-success"
    >
      <Card.Header className="text-center">Average Stats</Card.Header>
      <ListGroup className="py-2 dflex justify-content-between" variant="flush">
        {finalStats.map((stat) => {
          const [key, value] = stat;
          return (
            <Container className="d-flex justify-content-between py-1">
              <span>{`${key[0].toUpperCase()}${key.substring(1)}`}</span>{" "}
              <span>{`${parseInt(value)}`}</span>
            </Container>
          );
        })}
      </ListGroup>
    </Card>
  );
};

export default AverageCard;
