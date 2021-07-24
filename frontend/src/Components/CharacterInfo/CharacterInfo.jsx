import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { SiPostwoman } from "react-icons/si";
import { GiLifeBar } from "react-icons/gi";
import { ImManWoman } from "react-icons/im";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export const CharacterInfo = ({ show, handleClose, character }) => {
  const { name, gender, species, location, status, image } = character;
  return (
    <>
      <Modal show={show} className="justify-content-center" centered>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Image fluid src={image} alt={`${name}-image`} rounded />
            </Col>
          </Row>

          <Row xs="auto">
            <Col xs>
              <IoLocationSharp />
            </Col>
            <Col xs>
              <p>{location.name ? location.name : location}</p>
            </Col>
          </Row>

          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <Row xs="auto">
                <Col xs>
                  <ImManWoman />
                </Col>
                <Col xs>
                  <p>{gender}</p>
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row xs="auto">
                <Col xs>
                  <SiPostwoman />
                </Col>
                <Col xs>
                  <p>{species}</p>
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row xs="auto">
                <Col xs>
                  <GiLifeBar />
                </Col>
                <Col xs>
                  <p>{status}</p>
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
};
