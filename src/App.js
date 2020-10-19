import React from 'react';
import './App.css';
import LandingPage from './pages/landingPage';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Switch>
          <Route path="/" exact>
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
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
