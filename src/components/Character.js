import React from "react";
import { Button, Card, Container } from "react-bootstrap";

// powerStats prop is an array of arrays maped by Object.entries method.
const Character = ({
  name,
  powerStats,
  img,
  onClick,
  addMember,
  teamMember,
  biography,
}) => {
  const handleClick = (e) => {
    addMember();
  };

  // Conditional rendering to show the alignment of the hero.
  const border =
    biography.alignment === "good"
      ? "border rounded border-success"
      : "border rounded border-danger";

  const selectedHero = (
    <Card
      style={{ width: "18em" }}
      className={`${border} my-2 mx-2 p-2 shadow-lg`}
    >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>
        <div>
          {powerStats.map((stat) => {
            const [key, value] = stat;
            return (
              <Container className="d-flex justify-content-between">
                <span>{`${key[0].toUpperCase()}${key.substring(1)}`}</span>{" "}
                <span>{`${value}`}</span>
              </Container>
            );
          })}
        </div>

        <Container className="d-flex justify-content-between my-2 px-2">
          <Button className="py-2 px-3" variant="secondary">
            Details
          </Button>
          <Button className="py-2 px-3" variant="danger" onClick={onClick}>
            Delete
          </Button>
        </Container>
      </Card.Body>
    </Card>
  );

  if (teamMember) {
    return selectedHero;
  }

  const nonSelectedHero = (
    <Card
      style={{ width: "18em" }}
      className={`${border} my-2 mx-2 p-2 shadow-sm`}
    >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <div>
          {powerStats.map((stat) => {
            const [key, value] = stat;
            return (
              <Container className="d-flex justify-content-between">
                <span>{`${key[0].toUpperCase()}${key.substring(1)}`}</span>{" "}
                <span>{`${value}`}</span>
              </Container>
            );
          })}
        </div>
        <Container className="d-flex justify-content-center my-2">
          <Button className="py-2 px-3" variant="primary" onClick={handleClick}>
            Add to team
          </Button>
        </Container>
      </Card.Body>
    </Card>
  );

  if (!teamMember) {
    return nonSelectedHero;
  }
};

export default Character;
