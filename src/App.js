import React from 'react';
import './App.css';
import LandingPage from './pages/landingPage';
import { NavBar } from './components/NavBar.js';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import TrainingManual from './pages/trainingManual';
import FirstCasePage from './pages/firstCasePage';
import Profile from './pages/profile';
import TryAgain from './pages/tryAgain';
import GameOver from './pages/gameoverPage';
import BadgePage from './pages/badgePage';
import CasesPage from './pages/casesPage';

function App() {
  const [points, setPoints] = React.useState(2);
  const badgeType = null;
  const alias = 'BrownFox';
  const cases = {
    case1: 'Troll Hunter',
    case2: null,
    case3: null
  };

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
          <Route path="/cases" exact>
            <NavBar points={points} />
            <CasesPage alias={alias} cases={cases}></CasesPage>
          </Route>
          <Route path="/first-case-intro" exact></Route>
          <Route path="/first-case-task" exact>
            <NavBar points={points} />
            <FirstCasePage
              points={points}
              setPoints={setPoints}
            ></FirstCasePage>
          </Route>
          <Route path="/try-again" exact>
            <TryAgain />
          </Route>
          <Route path="/success" exact></Route>
          <Route path="/badge" exact>
            <BadgePage badgeType={badgeType} alias={alias} />
          </Route>
          <Route path="/second-case-intro" exact></Route>
          <Route path="/second-case-task" exact></Route>
          <Route path="/third-case-intro" exact></Route>
          <Route path="/third-case-task" exact></Route>
          <Route path="/game-over" exact>
            <GameOver />
          </Route>
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
