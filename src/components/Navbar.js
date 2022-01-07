import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import { useContext } from "react";
import Context from "../context/AuthContext";

export const Menu = () => {
  const auth = useContext(Context);
  // Conditional rendering with auth context
  // const Log = () => {
  //   return (

  //   )
  // }
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
              <Link to="/searcher">Searcher</Link>
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

// <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
//   <a href="#" class="navbar-brand">
//     {" "}
//     SuperHero Teams
//   </a>
//   <button
//     class="navbar-toggler"
//     type="button"
//     data-bs-toggle="collapse"
//     data-bs-target="#navmenu"
//   >
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navmenu">
//     <ul class="navbar-nav ms-auto">
//       <li class="nav-item">
//         <a href="/" class="nav-link">
//           Searcher
//         </a>
//       </li>
//       <li class="nav-item">
//         <a href="/home" class="nav-link">
//           My Team
//         </a>
//       </li>
//     </ul>
//   </div>
// </nav>
