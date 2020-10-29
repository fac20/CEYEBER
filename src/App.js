import React from 'react';
import './App.css';
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
import LandingPage from './pages/landingPage';
import { useHistory } from 'react-router-dom';
import NotFoundPage from './pages/pageNotFound';

function App() {
  const history = useHistory();

  const [points, setPoints] = React.useState(2);
  const [agent, setAgent] = React.useState('BrownFox');
  const [timeLeft, setTimeLeft] = React.useState(15);
  const [badgesWon, setBadgesWon] = React.useState({
    case1: null,
    case2: null,
    case3: null
  });
  const [taskName, setTaskName] = React.useState(null);
  const [theme, setTheme] = React.useState('dark-theme');
  document.body.className = theme;

  const [answers, setAnswers] = React.useState({
    q1a1: null,
    q1a2: null,
    q2a1: null,
    q2a2: null,
    q3a1: null,
    q3a2: null
  });
  const [passwordPoints, setPasswordPoints] = React.useState(0)

  let failMessage = '';

  taskName === 'Troll Hunter'
    ? (failMessage = `Try again – even though Sam is your
      friend, they might still spread Fake News. 
      It’s important to check.`)
    : taskName === 'Thief Buster'
    ? (failMessage = `Try again. It’s very easy to steal a logo and
    pretend you are from a certain company, and 
    ignoring these messages means
    they can come back again! `)
    : (failMessage = `Oh dear. Using a combination of capital letters, 
    numbers and punctuation like "!?" might help. Don't use things a hacker
    could easily guess like your name or birthday! 
    This time, get more than 10 points to win!
    `);

  return (
    <BrowserRouter>
      <main className="App">
        <Switch>
          <Route path="/" exact>
            <LandingPage agent={agent} setAgent={setAgent} />
          </Route>
          <Route path="/training-manual" exact>
            <TrainingManual theme={theme} setTheme={setTheme} />
          </Route>
          <Route path="/profile" exact>
            <NavBar
              setPoints={setPoints}
              points={points}
              timeLeft={timeLeft}
              taskName={taskName}
              badgesWon={badgesWon}
            />
            <Profile theme={theme} setTheme={setTheme} agent={agent} />
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
              agent={agent}
              badgesWon={badgesWon}
              taskName={taskName}
              theme={theme}
              setTheme={setTheme}
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
            <Intro theme={theme} setTheme={setTheme} taskName={taskName} />
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
              theme={theme}
              setTheme={setTheme}
              answers={answers}
              setAnswers={setAnswers}
            />
          </Route>
          <Route path="/try-again" exact>
            <TryAgain
              failMessage={failMessage}
              setTimeLeft={setTimeLeft}
              taskname={taskName}
            />
          </Route>
          <Route path="/badge" exact>
            <BadgePage
              badgeType={taskName}
              agent={agent}
              taskName={taskName}
              setTaskName={setTaskName}
            />
          </Route>
          <Route path="/second-case-intro" exact>
            <NavBar
              setPoints={setPoints}
              points={points}
              timeLeft={timeLeft}
              taskName={taskName}
              badgesWon={badgesWon}
            />
            <Intro theme={theme} setTheme={setTheme} taskName={taskName} />
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
              theme={theme}
              setTheme={setTheme}
              answers={answers}
              setAnswers={setAnswers}
            />
          </Route>
          <Route path="/third-case-intro" exact>
            <NavBar
              setPoints={setPoints}
              points={points}
              timeLeft={timeLeft}
              taskName={taskName}
              badgesWon={badgesWon}
            />
            <Intro theme={theme} setTheme={setTheme} taskName={taskName} />
          </Route>
          <Route path="/third-case-task" exact>
            <NavBar
              points={points}
              setPoints={setPoints}
              timeLeft={timeLeft}
              taskName={taskName}
              badgesWon={badgesWon}
              setPasswordPoints={setPasswordPoints}
              passwordPoints={passwordPoints}
            />
            <ThirdCasePage
              points={points}
              setPoints={setPoints}
              agent={agent}
              taskName={taskName}
              setTaskName={setTaskName}
              badgesWon={badgesWon}
              setBadgesWon={setBadgesWon}
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
              theme={theme}
              setTheme={setTheme}
              answers={answers}
              setAnswers={setAnswers}
              setPasswordPoints={setPasswordPoints}
              passwordPoints={passwordPoints}
            />
          </Route>
          <Route path="/game-over" exact>
            <GameOver
              points={points}
              setPoints={setPoints}
              setTaskName={setTaskName}
              setBadgesWon={setBadgesWon}
              answers={answers}
            />
          </Route>
          <Route path="/certificate" exact>
            <Congrats
              setPoints={setPoints}
              setBadgesWon={setBadgesWon}
              setTaskName={setTaskName}
              answers={answers}
            />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
