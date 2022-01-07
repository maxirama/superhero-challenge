import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import { useContext } from "react";
import Context from "../context/AuthContext";

export const Menu = () => {
  const auth = useContext(Context);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="text-light">
      <Container>
        <Navbar.Brand href="#">SuperHero Teams</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-navs" className="flex-grow-0">
          <Nav className="me-auto">
            <Nav.Link href="#">
              <Link to="/home">Home</Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to="/searcher">Search</Link>
            </Nav.Link>
            <Nav.Link href="#">
              {auth ? (
                <Link to="/login">Logout</Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
