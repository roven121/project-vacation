import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Navigator = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Vacations</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/login-page">sing-in</Link>
            </Nav.Link>
            <Nav.Link>Link</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
