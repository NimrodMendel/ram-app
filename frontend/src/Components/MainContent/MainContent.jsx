import React from "react";
import { Paginate } from "../../Components/Paginate/Paginate";
import { CharacterCard } from "../CharacterCard/CharacterCard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const MainContent = ({
  handleShowAlert,
  charactersPerPage,
  currentCharacters,
  currentPage,
  paginate,
  charactersCount,
  
}) => {
  return (
    <>
      <Row>
        {currentCharacters.map((character) => (
          <Col className="mt-5" key={character.id}>
            <CharacterCard
              key={character.id}
              character={character}
              handleShowAlert={handleShowAlert}
            />
          </Col>
        ))}
      </Row>
      <Row className="mt-5 justify-content-center">
        <Col xs>
          <Paginate
            charactersPerPage={charactersPerPage}
            charactersCount={currentCharacters.length}
            paginate={paginate}
            active={currentPage}
          />
        </Col>
      </Row>
    </>
  );
};
