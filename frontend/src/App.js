import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Views/Home/Home";
import { Favorites } from "./Views/Favorites/Favorites";
import { Navigation } from "./Components/Navigation/Navigation";
import {
  getAll,
  getFavorites,
  likeCharacter,
  unlikeCharacter,
} from "./Lib/api";
import "./App.css";

const initialValues = {
  name: "",
  gender: "",
  species: "",
  status: "",
  order: "",
};

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [formData, setFormData] = useState(initialValues);
  const charactersPerPage = 30;

  const getAllCharactersFromAPI = async (formData) => {
    const { data } = await getAll(formData);

    if (data) {
      setCharacters(data);
    }
    setFormData({});
    return data;
  };

  const getFavoritesFromDB = async (formData) => {
    const { data } = await getFavorites(formData);

    if (data) {
      setFavorites(data);
    }

    setFormData({});
  };

  const like = async (character) => {
    await likeCharacter(character);
    let temp = favorites;
    temp.push(character);
    setFavorites(temp);
  };

  const unlike = async (id) => {
    await unlikeCharacter(id);
    let temp = favorites.filter((ch) => ch.character_id !== id);
    setFavorites(temp);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const setData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getAllCharactersFromAPI(formData);
    getFavoritesFromDB(formData);
  }, []);

  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home
              charactersPerPage={charactersPerPage}
              getAllCharactersFromAPI={getAllCharactersFromAPI}
              paginate={paginate}
              currentPage={currentPage}
              characters={characters}
              setData={setData}
              formData={formData}
              favorites={favorites}
              like={like}
              unlike={unlike}
            />
          </Route>
          <Route path="/favorites" component={Favorites}>
            <Favorites
              getFavoritesFromDB={getFavoritesFromDB}
              charactersPerPage={charactersPerPage}
              paginate={paginate}
              currentPage={currentPage}
              favorites={favorites}
              setData={setData}
              formData={formData}
              like={like}
              unlike={unlike}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
