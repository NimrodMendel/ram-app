import React, { useState, useEffect } from "react";
import { getAllCharacters } from "../../Lib/api";
import { CharacterCard } from "../../Components/CharacterCard/CharacterCard";
import { Loading } from "../../Components/Loading/Loading";
import { Paginate } from "../../Components/Paginate/Paginate";
import { Filter } from "../../Components/Filter/Filter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const initialValues = {
  name: "",
  gender: "",
  species: "",
  status: "",
};

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialValues);
  const charactersPerPage = 30;

  const getCharacters = async () => {
    setLoading(true);
    const data = await getAllCharacters(formData);

    if (data) {
      setCharacters(data);
    }
    setLoading(false);
    setFormData(initialValues);
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

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Container fluid className="p-5">
        <h1>Browse Characters</h1>
        {loading ? (
          <Container>
            <Loading />
          </Container>
        ) : (
          <>
            <Row>
              <Filter setData={setData} getCharacters={getCharacters} />
            </Row>
            <Row>
              {currentCharacters.map((character) => (
                <Col className="mt-5" key={character.id}>
                  <CharacterCard key={character.id} character={character} />
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
