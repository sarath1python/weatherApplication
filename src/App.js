import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import Frame from "./components/Frame"
import main from "./components/main"



const App = () => (
  <Router>
    <div>
      <main>
        <Switch>
          <Route exact path="/" component={Frame} />
          <Route path="/country/:city" component={main} />
        </Switch>
      </main>
    </div>
  </Router>
);

export default App;