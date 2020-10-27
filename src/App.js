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
import Congrats from './pages/certificate';
import BadgePage from './pages/badgePage';
import CasesPage from './pages/casesPage';
import Intro from './components/Intro';
import { useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();

  const [points, setPoints] = React.useState(2);
  const badgeType = null;
  const alias = 'BrownFox';
  const [timeLeft, setTimeLeft] = React.useState(30);

  const [badgesWon, setBadgesWon] = React.useState({
    case1: null,
    case2: null,
    case3: null
  });

  const [taskName, setTaskName] = React.useState(null);
  let failMessage = '';

  taskName === 'Troll Hunter'
    ? (failMessage = `Try again – even though Sam is your
      friend, they might still spread Fake News. 
      It’s important to check.`)
    : taskName === 'phishingMessage'
    ? (failMessage = `Try again. It’s very easy to steal a logo and
    pretend you are from a certain company, and 
    ignoring these messages means
    they can come back again! `)
    : (failMessage = `Oh dear. Using a combination of capital letters, 
    numbers and punctuation like "!?" might help. Don't use things a hacker
    could easily guess like your name or birthday! `);
  const [theme, setTheme] = React.useState(true);
  console.log('THEME', theme);
  React.useEffect(() => {
    setTheme(window.location.pathname.includes('intro'));
    theme
      ? (document.body.className = 'light-theme')
      : (document.body.className = 'dark-theme');
  }, []);
  console.log(badgesWon, taskName);

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
            <NavBar
              setPoints={setPoints}
              points={points}
              timeLeft={timeLeft}
              taskName={taskName}
              badgesWon={badgesWon}
            />
            <Profile />
          </Route>
          <Route path="/cases" exact>
            <NavBar
              setPoints={setPoints}
              points={points}
              timeLeft={timeLeft}
              taskName={taskName}
              badgesWon={badgesWon}
            />
            <CasesPage
              alias={alias}
              badgesWon={badgesWon}
              taskName={taskName}
            />
          </Route>
          <Route path="/first-case-intro" exact>
            <NavBar
              setPoints={setPoints}
              points={points}
              timeLeft={timeLeft}
              taskName={taskName}
              badgesWon={badgesWon}
            />
            <Intro taskName={taskName} />
          </Route>
          <Route path="/first-case-task" exact>
            <NavBar
              setPoints={setPoints}
              points={points}
              timeLeft={timeLeft}
              taskName={taskName}
              badgesWon={badgesWon}
            />
            <FirstCasePage
              points={points}
              setPoints={setPoints}
              taskName={taskName}
              setTaskName={setTaskName}
              badgesWon={badgesWon}
              setBadgesWon={setBadgesWon}
            />
          </Route>
          <Route path="/try-again" exact>
            <TryAgain failMessage={failMessage} />
          </Route>
          <Route path="/badge" exact>
            <BadgePage
              badgeType={taskName}
              alias={alias}
              taskName={taskName}
              setTaskName={setTaskName}
            />
          </Route>
          <Route path="/second-case-intro" exact>
            <Intro taskName={taskName} />
          </Route>
          <Route path="/second-case-task" exact>
            <NavBar
              setPoints={setPoints}
              points={points}
              timeLeft={timeLeft}
              taskName={taskName}
              badgesWon={badgesWon}
            />
            <SecondCasePage
              points={points}
              setPoints={setPoints}
              taskName={taskName}
              setTaskName={setTaskName}
              setBadgesWon={setBadgesWon}
              badgesWon={badgesWon}
            />
          </Route>
          <Route path="/third-case-intro" exact>
            <Intro taskName={taskName} />
          </Route>
          <Route path="/third-case-task" exact>
            <NavBar
              setPoints={setPoints}
              points={points}
              timeLeft={timeLeft}
              taskName={taskName}
              badgesWon={badgesWon}
            />
            <ThirdCasePage
              points={points}
              setPoints={setPoints}
              alias={alias}
              taskName={taskName}
              setTaskName={setTaskName}
              badgesWon={badgesWon}
              setBadgesWon={setBadgesWon}
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
            />
          </Route>
          <Route path="/game-over" exact>
            <GameOver />
          </Route>
          <Route path="/certificate" exact>
            <Congrats />
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
