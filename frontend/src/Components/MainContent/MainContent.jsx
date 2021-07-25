import React from "react";
import { Paginate } from "../../Components/Paginate/Paginate";
import { CharacterCard } from "../CharacterCard/CharacterCard";


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const MainContent = ({
  charactersPerPage,
  currentPage,
  paginate,
  characters,
  handleShowAlert,
  favorites,
  unlike,
}) => {
  
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  return (
    <>
      <Row>
        {currentCharacters.map((character) => (
          <Col className="mt-5" key={character.character_id}>
            <CharacterCard
              key={character.character_id}
              character={character}
              handleShowAlert={handleShowAlert}
              favorites={favorites}
              unlike={unlike}
            />
          </Col>
        ))}
      </Row>
      <Row className="mt-5 justify-content-center">
        <Col xs>
          <Paginate
            charactersPerPage={charactersPerPage}
            charactersCount={characters.length}
            paginate={paginate}
            active={currentPage}
          />
        </Col>
      </Row>
    </>
  );
};
