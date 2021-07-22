import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Views/Home/Home";
import { Favorites } from "./Views/Favorites/Favorites";
import { Navigation } from "./Components/Navigation/Navigation";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/favorites" exact component={Favorites} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
