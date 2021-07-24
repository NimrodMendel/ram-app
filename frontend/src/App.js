import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Views/Home/Home";
import { Favorites } from "./Views/Favorites/Favorites";
import { Navigation } from "./Components/Navigation/Navigation";
import { getAll, getFavorites } from "./Lib/api";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const charactersPerPage = 30;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home
              charactersPerPage={charactersPerPage}
              getAll={getAll}
              paginate={paginate}
              currentPage={currentPage}
            />
          </Route>
          <Route path="/favorites" exact component={Favorites}>
            <Favorites
              charactersPerPage={charactersPerPage}
              getFavorites={getFavorites}
              paginate={paginate}
              currentPage={currentPage}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
