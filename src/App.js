import React, { Component } from "react";
import "./App.css";
import Register from "./component/Register";
import List from "./component/List";
import { Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/users" className="navbar-brand">
            Juara Coding Exam
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/users"} className="nav-link">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Users
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/users"]} component={List} />
            <Route exact path="/add" component={Register} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;