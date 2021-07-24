import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

export const Message = ({ show, message, handleCloseAlert }) => {
  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Success!</Alert.Heading>
        <p>{message}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={handleCloseAlert} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>
    </>
  );
};
