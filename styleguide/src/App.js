import './styles/App.scss';
import React from "react";
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
        <div className="title">
          <h1>
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
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div className="page">
      <h1>Introduction</h1>
      <p>
        Lorem Impsum
        Lorem Impsum
        Lorem Impsum
        Lorem Impsum
        Lorem Impsum
        Lorem Impsum
        Lorem Impsum
        Lorem Impsum
        Lorem Impsum
        Lorem Impsum
        Lorem Impsum
        Lorem Impsum
      </p>
      <code>
        Lorem Impsum
        Lorem Impsum
        Lorem Impsum
        Lorem Impsum
      </code>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="page">
      <h2>Dashboard</h2>
    </div>
  );
}
