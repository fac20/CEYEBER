import React from 'react';
import './App.css';
import LandingPage from './pages/landingPage';
import { StyledNavBar, NavBar } from './components/NavBar.js';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import TrainingManual from './pages/trainingManual';
import Profile from './pages/profile';

function App() {
  //set points to start with 2
  const [points, setPoints] = React.useState(2);

  return (
    <BrowserRouter>
      <main className="App">
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/training-manual" exact>
            <TrainingManual />
          </Route>
          <Route path="/profile" exact>
            <NavBar points={points} />
            <Profile />
          </Route>
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
