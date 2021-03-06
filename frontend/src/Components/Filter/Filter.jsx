import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";

export const Filter = ({ setData, getCharacters, values }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    getCharacters(values);
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
              onChange={setData}
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
              onChange={setData}
              value={gender}
            />
            <Form.Text className="text-muted">Male / Female</Form.Text>
          </Col>
          <Col>
            <Form.Control
              placeholder="Species"
              name="species"
              onChange={setData}
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
              onChange={setData}
              value={status}
            />
            <Form.Text className="text-muted">
              Dead / Alive / Unknown.
            </Form.Text>
          </Col>
          <Col>
            <Form.Select
              aria-label="Default select example"
              onChange={setData}
              name="order"
            >
              <option value="">Order by</option>
              <option value="name_asc" name="order">
                Name Asc
              </option>
              <option value="name_desc" name="order">
                Name Desc
              </option>
            </Form.Select>
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
