import "./styles/App.scss";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

// import the pages
import Introduction from "./components/pages/Introduction";
import Colors from "./components/pages/Colors";
import Typography from "./components/pages/Typography";
import Forms from "./components/pages/Forms";
import Methodology from "./components/pages/Methodology";
import Buttons from "./components/pages/Buttons";
import Users from "./components/pages/Users";

export default function App() {
  return (
    <Router>
      {/* Left Navigation */}
      <nav className="nav-wrapper">
        <div className="title">
          {" "}
          <h1>CodeBunker</h1>
          <p>STYLE GUIDE</p>
        </div>
        <ul className="styleguide-nav">
          <li>
            <NavLink exact={true} to="/" activeClassName="is-active-link">
              Introduction
            </NavLink>
          </li>
          <li>
            <NavLink to="/methodology" activeClassName="is-active-link">
              Methodology
            </NavLink>
          </li>
          <li>
            <NavLink to="/colors" activeClassName="is-active-link">
              Colors
            </NavLink>
          </li>
          <li>
            <NavLink to="/typography" activeClassName="is-active-link">
              Typography
            </NavLink>
          </li>
          <li>
            <NavLink to="/buttons" activeClassName="is-active-link">
              Buttons
            </NavLink>
          </li>
          <li>
            <NavLink to="/forms" activeClassName="is-active-link">
              Forms
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" activeClassName="is-active-link">
              Users
            </NavLink>
          </li>
        </ul>
        <div className="authors">
          <span>Felix Macho</span>
          <span>Simon Sölder</span>
        </div>
      </nav>

      {/* Switch */}
      <Switch>
        <Route exact path="/">
          <Introduction />
        </Route>
        <Route path="/methodology">
          <Methodology />
        </Route>
        <Route path="/colors">
          <Colors />
        </Route>
        <Route path="/typography">
          <Typography />
        </Route>
        <Route path="/buttons">
          <Buttons />
        </Route>
        <Route path="/forms">
          <Forms />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </Router>
  );
}
