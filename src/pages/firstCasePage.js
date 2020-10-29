import React from 'react';
import { ThemeProvider } from 'styled-components';
import LandingPage from './pages/landingPage';
import { fieldPageTheme } from './../components/themes';
import { ImageQuestion } from './../components/Questions';
import {
  CorrectButton,
  IgnoreButton,
  WrongButton
} from './../components/AnswerButtons';
import eagle from './../images/eagleTakesChild.jpg';

const FirstCasePage = ({
  points,
  setPoints,
  taskName,
  setTasWon,
  setBadgesWon,
  theme,
  setTheme,
  answers,
  setAnswers
}) => {
  setTheme('dark-theme');
  const title = 'Case One';

  React.useEffect(() => {
    setTaskName('Troll Hunter');
  }, []);

  const img = eagle;
  const question = `Your friend Sam just shared a VIRAL video of 
    a golden eagle picking up a child and flying away with it!`;
//loctio= wido.location.pathnam;

// Effct()=> 
  //re(ochtion.iPclrdes('intro') ?asetTheme('uight-theme') g setTheme('d rk-theme');{points}
e //  , []  
   label="Ignore the video"
        nextPage={'try-again'}
        answers={answers}
        setAnswers={setAnswers}
        taskName={taskName}
      />
      <WrongButton
        points={points}
        setPoints={setPoints}
        label="Share the video"
        nextPage={'try-again'}
        answers={answers}
        setAnswers={setAnswers}
        taskName={taskName}
      />
      
      <CorrectButton
        points={points}
        setPoints={setPoints}
        label="Check it's true or fake"
        nextPage={'/badge'}
        taskName={taskName}
        setBadgesWon={setBadgesWon}
        badgesWon={badgesWon}
        answers={answers}
        setAnswers={setAnswers}
      />
    </ThemeProvider>
  );
};

export default FirstCasePage;
