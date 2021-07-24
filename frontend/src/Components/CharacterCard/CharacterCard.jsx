import React, { useState } from "react";

import { likeCharacter } from "../../Lib/api";
import { CharacterInfo } from "../CharacterInfo/CharacterInfo";
import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const CharacterCard = ({ character, handleShowAlert }) => {
  const [show, setShow] = useState(false);

  const { name, gender, species, location, status, image } = character;

  const like = async () => {
    const res = await likeCharacter(character);
    handleShowAlert();
  };

  const handleShowModal = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <CharacterInfo
          show={show}
          handleClose={handleClose}
          character={character}
        />
      )}
      <Card style={{ width: "20rem" }} className="shadow rounded">
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title>
            <em>{name}</em>
          </Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>

        <Card.Body>
          <Row>
            <Col>
              <Button variant="primary" onClick={like}>
                Like
              </Button>
            </Col>
            <Col>
              <Button onClick={handleShowModal} variant="secondary">
                More details
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
