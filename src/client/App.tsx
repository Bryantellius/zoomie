import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Room from "./views/Room";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/join/:hash">
          <Room />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
