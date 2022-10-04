import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AdsList from "./components/ads-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/ads"} className="navbar-brand">
            Ads Search App
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/ads"} className="nav-link">
                Ads
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/ads"]} component={AdsList} />
            <Route path="/ads/:id" component={AdsList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
