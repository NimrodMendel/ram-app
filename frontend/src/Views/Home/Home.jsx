import React, { useState } from "react";

import { Loading } from "../../Components/Loading/Loading";
import { Filter } from "../../Components/Filter/Filter";
import { Message } from "../../Components/Message/Message";
import Row from "react-bootstrap/Row";

import Container from "react-bootstrap/Container";
import { MainContent } from "../../Components/MainContent/MainContent";

export const Home = ({
  charactersPerPage,
  getAllCharactersFromAPI,
  paginate,
  currentPage,
  characters,
  setData,
  formData,
  favorites,
  unlike,
}) => {
  const [showAlert, setShowAlert] = useState(false);
  const message = "Character added to favorites!";

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <Container fluid className="p-5">
        <h1>Browse Characters</h1>
        <Row>
          <Filter
            setData={setData}
            getCharacters={getAllCharactersFromAPI}
            values={formData}
          />
        </Row>
        {characters.length === 0 ? (
          <Container>
            <Loading />
          </Container>
        ) : (
          <>
            {showAlert && (
              <Message message={message} handleCloseAlert={handleCloseAlert} />
            )}
            <MainContent
              characters={characters}
              paginate={paginate}
              charactersPerPage={charactersPerPage}
              currentPage={currentPage}
              handleShowAlert={handleShowAlert}
              favorites={favorites}
              unlike={unlike}
            />
          </>
        )}
      </Container>
    </>
  );
};
