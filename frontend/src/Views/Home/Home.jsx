import React, { useState, useEffect } from "react";
import { Paginate } from "../../Components/Paginate/Paginate";
import { CharacterCard } from "../../Components/CharacterCard/CharacterCard";
import { Loading } from "../../Components/Loading/Loading";
import { Filter } from "../../Components/Filter/Filter";
import { Message } from "../../Components/Message/Message";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Container from "react-bootstrap/Container";

const initialValues = {
  name: "",
  gender: "",
  species: "",
  status: "",
};

export const Home = ({ charactersPerPage, getAll, paginate, currentPage }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialValues);
  const [showAlert, setShowAlert] = useState(false);
  const message = "Character added to favorites!";

  const getCharacters = async () => {
    setLoading(true);
    const { data } = await getAll(formData);

    if (data) {
      setCharacters(data);
    }
    setLoading(false);
  };

  const setData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

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
            getCharacters={getCharacters}
            values={formData}
          />
        </Row>
        {loading ? (
          <Container>
            <Loading />
          </Container>
        ) : (
          <>
            {showAlert && (
              <Message message={message} handleCloseAlert={handleCloseAlert} />
            )}
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
                  charactersCount={characters.length}
                  paginate={paginate}
                  active={currentPage}
                />
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};
