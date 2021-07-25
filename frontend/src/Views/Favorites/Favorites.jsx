import React, { useState, useEffect } from "react";
import { unlikeCharacter } from "../../Lib/api";
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
  order: "",
};

export const Favorites = ({
  charactersPerPage,
  getFavorites,
  paginate,
  currentPage,
}) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialValues);

  const getCharacters = async () => {
    setLoading(true);

    const { data } = await getFavorites(formData);

    if (data) {
      setFavorites(data);
    }
    setLoading(false);
  };

  const unlike = async (name) => {
    const res = await unlikeCharacter(name);

    if (res) {
      let temp = favorites.filter((character) => character.name !== name);
      setFavorites(temp);
    }

    return;
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

  useEffect(() => {}, [favorites]);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = favorites.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  return (
    <>
      <Container fluid className="p-5">
        <h1>Favorites</h1>
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
            <Row>
              {currentCharacters.map((character) => (
                <Col className="mt-5" key={character.id}>
                  <CharacterCard
                    key={character.id}
                    character={character}
                    unlike={unlike}
                  />
                </Col>
              ))}
            </Row>
            <Row className="mt-5 justify-content-center">
              <Col xs>
                <Paginate
                  charactersPerPage={charactersPerPage}
                  charactersCount={favorites.length}
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
