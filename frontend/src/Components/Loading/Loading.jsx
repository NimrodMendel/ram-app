import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/esm/Container";

export const Loading = () => {
  return (
    <>
      <Container>
        <Spinner animation="grow" variant="primary" />
      </Container>
    </>
  );
};
