import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { SiPostwoman } from "react-icons/si";
import { GiLifeBar } from "react-icons/gi";
import { ImManWoman } from "react-icons/im";
import { likeCharacter } from "../../Lib/api";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const CharacterCard = ({ character }) => {
  const { name, gender, species, location, status, image } = character;

  const like = async () => {
    const res = await likeCharacter(character);
  };

  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title>
            <em>{name}</em>
          </Card.Title>
          <Card.Text>
            <Row xs="auto">
              <Col xs>
                <IoLocationSharp />
              </Col>
              <Col xs>
                <p>{location.name}</p>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
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
        <Card.Body>
          {/* <Card.Link href="#">Add to favorites</Card.Link> */}
          <Button onClick={like}>Like</Button>
          <Card.Link href="#">More info</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};
