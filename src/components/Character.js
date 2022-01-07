import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

// powerStats prop is an array of arrays maped by Object.entries method.
const Character = ({ name, powerStats, img, onClick, addMember }) => {
  const handleClick = (e) => {
    addMember();
  };

  const hero = (
    <Card style={{ width: "18em" }} className="my-2 p-2">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div>
          {powerStats.map((stat) => {
            const [key, value] = stat;
            return <div>{`${key.toUpperCase()} : ${value}`}</div>;
          })}
        </div>
        <Button variant="primary" onClick={onClick}>
          Add to team
        </Button>
      </Card.Body>
    </Card>
  );

  return (
    <Card style={{ width: "18em" }} className="my-2 p-2">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div>
          {powerStats.map((stat) => {
            const [key, value] = stat;
            return <div>{`${key.toUpperCase()} : ${value}`}</div>;
          })}
        </div>
        <Button variant="primary" onClick={handleClick}>
          Add to team
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Character;
