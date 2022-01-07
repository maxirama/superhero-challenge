import React from "react";
import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";

// powerStats prop is an array of arrays maped by Object.entries method.
const Character = ({
  name,
  powerStats,
  img,
  onClick,
  addMember,
  deleteMember,
  teamMember,
  biography,
  details,
  showHeroDetails,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleAddClick = (e) => {
    addMember();
  };

  const handleDeleteClick = (e) => {
    deleteMember();
  };

  const handleDetailsClick = (e) => {
    setShowDetails(!showDetails);
  };

  const heroDetails = () => {
    const heroDetails = [];
    for (const detail in details) {
      heroDetails.push(
        <Container className="d-flex justify-content-between py-1">
          <span>
            {` 
            ${detail[0].toLocaleUpperCase}${detail.substring(1)}
            `}
          </span>
          ;
        </Container>
      );
    }
    console.log(heroDetails);
    return heroDetails;
  };

  // Conditional rendering to show the alignment of the hero.
  const border =
    biography.alignment === "good"
      ? "border rounded border-success"
      : "border rounded border-danger";

  const memberStats = (
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
              <Container className="d-flex justify-content-between py-1">
                <span>{`${key[0].toUpperCase()}${key.substring(1)}`}</span>{" "}
                <span>{`${value}`}</span>
              </Container>
            );
          })}
        </div>

        <Container className="d-flex justify-content-between mt-3 px-2">
          <Button
            className="py-2 px-4"
            variant="secondary"
            onClick={handleDetailsClick}
          >
            Details
          </Button>
          <Button
            className="py-2 px-4"
            variant="danger"
            onClick={handleDeleteClick}
          >
            Delete
          </Button>
        </Container>
      </Card.Body>
    </Card>
  );

  const memberDetails = (
    <Card
      style={{ width: "18em" }}
      className={`${border} my-2 mx-2 p-2 shadow-lg`}
    >
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>
        <div>
          {details.map((stat) => {
            const [key, value] = stat;
            return (
              <Container className="d-flex justify-content-between py-1">
                <span>{`${key[0].toUpperCase()}${key.substring(1)}`}</span>{" "}
                <span>{`${value}`}</span>
              </Container>
            );
          })}
        </div>

        <Container className="d-flex justify-content-between mt-3 px-2">
          <Button
            className="py-2 px-4"
            variant="secondary"
            onClick={handleDetailsClick}
          >
            Details
          </Button>
          <Button
            className="py-2 px-4"
            variant="danger"
            onClick={handleDeleteClick}
          >
            Delete
          </Button>
        </Container>
      </Card.Body>
    </Card>
  );
  // const selectedHeroDetails = (

  // )

  if (teamMember) {
    const memberDisplay = showDetails ? memberDetails : memberStats;
    return memberDisplay;
  }

  const nonTeamMember = (
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
              <Container className="d-flex justify-content-between py-1">
                <span>{`${key[0].toUpperCase()}${key.substring(1)}`}</span>{" "}
                <span>{`${value}`}</span>
              </Container>
            );
          })}
        </div>
        <Container className="d-flex justify-content-center mt-3">
          <Button
            className="py-2 px-3 my-2"
            variant="primary"
            onClick={handleAddClick}
          >
            Add to team
          </Button>
        </Container>
      </Card.Body>
    </Card>
  );

  if (!teamMember) {
    return nonTeamMember;
  }
};

export default Character;
