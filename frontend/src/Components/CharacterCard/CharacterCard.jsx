import React, { useState, useEffect } from "react";

import { likeCharacter } from "../../Lib/api";
import { CharacterInfo } from "../CharacterInfo/CharacterInfo";
import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const CharacterCard = ({
  character,
  handleShowAlert,
  unlike,
  favorites,
}) => {
  const [show, setShow] = useState(false);
  const { name, image } = character;

  const like = async () => {
    await likeCharacter(character);
    handleShowAlert();
  };

  const removeFromFavorites = async () => {
    await unlike(character.character_id);
  };

  const handleShowModal = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {}, [favorites]);

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
            {favorites.find((ch) => ch.character_id === character.id) ||
            favorites.find(
              (ch) => ch.character_id === character.character_id
            ) ? (
              <Col>
                {console.log("true")}
                <Button onClick={removeFromFavorites} variant="danger">
                  Unlike
                </Button>
              </Col>
            ) : (
              <Col>
                <Button variant="primary" onClick={like}>
                  Like
                </Button>
              </Col>
            )}
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
