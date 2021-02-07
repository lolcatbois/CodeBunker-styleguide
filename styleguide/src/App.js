import './styles/App.scss';
import React from "react";
import Introduction from "./components/pages/Introduction";
import Colors from "./components/pages/Colors";
import Typography from "./components/pages/Typography";
import Buttons from "./components/pages/Buttons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <nav className="nav-wrapper">
        <div className="title"> <h1>
          CodeBunker
        </h1>
          <p>
            Style Guide
        </p>
        </div>
        <ul className="styleguide-nav">
          <li>
            <NavLink exact={true} to="/" activeClassName="is-active-link">Introduction</NavLink>
          </li>
          <li>
            <NavLink to="/methodoloy" activeClassName="is-active-link">Methodology</NavLink>
          </li>
          <li>
            <NavLink to="/colors" activeClassName="is-active-link">Colors</NavLink>
          </li>
          <li>
            <NavLink to="/typography" activeClassName="is-active-link">Typography</NavLink>
          </li>
          <li>
            <NavLink to="/buttons" activeClassName="is-active-link">Buttons</NavLink>
          </li>
          <li>
            <NavLink to="/forms" activeClassName="is-active-link">Forms</NavLink>
          </li>
        </ul>
        <div className="authors">
          <span>Felix Macho</span>
          <span>Simon Sölder</span>

        </div>
      </nav>

      <Switch>
        <Route exact path="/">
          <Introduction />
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
      </Switch>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

