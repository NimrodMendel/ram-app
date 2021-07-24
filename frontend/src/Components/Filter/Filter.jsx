import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";

export const Filter = ({ setData, getCharacters, values }) => {
  const onChange = (e) => {
    setData(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getCharacters();
  };

  const { name, gender, species, status } = values;

  return (
    <>
      <Form className="mt-3" onSubmit={onSubmit}>
        <Row>
          <Col>
            <Form.Control
              placeholder="Character Name"
              name="name"
              onChange={onChange}
              value={name}
            />
            <Form.Text className="text-muted">
              Upper or lower case letters
            </Form.Text>
          </Col>
          <Col>
            <Form.Control
              placeholder="Gender"
              name="gender"
              onChange={onChange}
              value={gender}
            />
            <Form.Text className="text-muted">Male / Female</Form.Text>
          </Col>
          <Col>
            <Form.Control
              placeholder="Species"
              name="species"
              onChange={onChange}
              value={species}
            />
            <Form.Text className="text-muted">
              Human / Alien / Poopybutthole
            </Form.Text>
          </Col>
          <Col>
            <Form.Control
              placeholder="Status"
              name="status"
              onChange={onChange}
              value={status}
            />
            <Form.Text className="text-muted">
              Dead / Alive / Unknown.
            </Form.Text>
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Filter results
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
