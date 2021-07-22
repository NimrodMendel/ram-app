import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";

export const Navigation = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" className="px-4 py-2">
        <Row className="align-items-center">
          <Col>
            <Navbar.Brand href="/" className="mx-4">
              Rick and Morty Browser
            </Navbar.Brand>
          </Col>
          <Col>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/favorites">Favorites</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Navbar>
    </>
  );
};
