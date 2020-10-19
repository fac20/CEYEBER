import React from 'react';
import './App.css';
import LandingPage from './pages/landingPage';
import { NavBar } from './components/NavBar.js';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Switch>
          <Route path="/" exact>
            <NavBar />
            <LandingPage />
          </Route>
          <Route path="/profile" exact></Route>
          <Route path="/training-manual" exact></Route>
          <Route path="/first-case-intro" exact></Route>
          <Route path="/first-case-task" exact></Route>
          <Route path="/try-again" exact></Route>
          <Route path="/success" exact></Route>
          <Route path="/badge" exact></Route>
          <Route path="/second-case-intro" exact></Route>
          <Route path="/second-case-task" exact></Route>
          <Route path="/third-case-intro" exact></Route>
          <Route path="/third-case-task" exact></Route>
          <Route path="/game-over" exact></Route>
          <Route>
            <h1>Oops! Page not found.</h1>
            <Link to="/">Back to Home</Link>
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
