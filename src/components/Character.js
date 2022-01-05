import React from "react";
import Button from "../components/Button";
import { Card } from "react-bootstrap";

// powerStats prop is an array of arrays maped by Object.entries method.
const Character = ({ name, powerStats, img, onClick }) => {
  return (
    <Card style={{ width: "10em" }}>
      <Card.Img variant="top" src="{img}" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div>
          {powerStats.map((stat) => {
            const [key, value] = stat;
            return <div>{`${key.toUpperCase()} : ${value}`}</div>;
          })}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Character;
