import React from "react";
import { Loading } from "../../Components/Loading/Loading";
import { Filter } from "../../Components/Filter/Filter";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { MainContent } from "../../Components/MainContent/MainContent";


export const Favorites = ({
  charactersPerPage,
  getFavoritesFromDB,
  paginate,
  favorites,
  currentPage,
  setData,
  formData,
  unlike,
}) => {
  
  return (
    <>
      <Container fluid className="p-5">
        <h1>Favorites</h1>
        <Row>
          <Filter
            setData={setData}
            getCharacters={getFavoritesFromDB}
            values={formData}
          />
        </Row>
        {favorites.length === 0 ? (
          <Container>
            <Loading />
          </Container>
        ) : (
          <MainContent
            characters={favorites}
            paginate={paginate}
            charactersPerPage={charactersPerPage}
            currentPage={currentPage}
            favorites={favorites}
            unlike={unlike}
          />
        )}
      </Container>
    </>
  );
};
