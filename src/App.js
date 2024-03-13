import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Claim from "./Claim";

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/claim">
            <Claim />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
