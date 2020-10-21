import React from 'react';
import './App.css';
import LandingPage from './pages/landingPage';
import { NavBar } from './components/NavBar.js';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import TrainingManual from './pages/trainingManual';
import FirstCasePage from './pages/firstCasePage';
import SecondCasePage from './pages/secondCasePage';
import ThirdCasePage from './pages/thirdCasePage';
import Profile from './pages/profile';
import TryAgain from './pages/tryAgain';
import GameOver from './pages/gameoverPage';
import BadgePage from './pages/badgePage';

function App() {
  const [points, setPoints] = React.useState(2);
  const badgeType = 'Troll Hunter';
  const alias = 'BrownFox';

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
          <Route path="/first-case-task" exact>
            <NavBar points={points} />
            <FirstCasePage points={points} setPoints={setPoints} />
          </Route>
          <Route path="/try-again" exact>
            <TryAgain />
          </Route>
          <Route path="/badge" exact>
            <BadgePage badgeType={badgeType} alias={alias} />
          </Route>
          <Route path="/second-case-intro" exact></Route>
          <Route path="/second-case-task" exact>
            <NavBar points={points} />
            <SecondCasePage points={points} setPoints={setPoints} />
          </Route>
          <Route path="/third-case-intro" exact></Route>
          <Route path="/third-case-task" exact>
            <NavBar points={points} />

            <ThirdCasePage
              points={points}
              setPoints={setPoints}
              alias={alias}
            />
          </Route>
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
