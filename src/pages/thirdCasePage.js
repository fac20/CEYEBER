import React from 'react';
import { ThemeProvider } from 'styled-components';
import { fieldPageTheme } from './../components/themes';
import { TimedQuestion } from './../components/Questions';
import {
  CorrectButton,
  IgnoreButton,
  WrongButton
} from './../components/AnswerButtons';

//make whichever buttons have been clicked appear on the screen
//make next page be a badge if you get a certain number of points!

const ThirdCasePage = ({ points, setPoints, alias }) => {
  const title = 'Case Three';
  const question = `
    A hacker has been detected nearby. 
    You haven’t changed your password in years!
    Quick, make your password stronger!`;

  const [timeLeft, setTimeLeft] = React.useState(30);

  return (
    <ThemeProvider theme={fieldPageTheme}>
      <TimedQuestion
        title={title}
        question={question}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        nextPage={'/try-again'}
      />
      <CorrectButton points={points} setPoints={setPoints} label="!!" />
      <IgnoreButton points={points} setPoints={setPoints} label="dog" />
      <CorrectButton points={points} setPoints={setPoints} label="01" />
      <WrongButton points={points} setPoints={setPoints} label="password" />
      <CorrectButton points={points} setPoints={setPoints} label="?" />
      <IgnoreButton points={points} setPoints={setPoints} label="abc" />
      <WrongButton points={points} setPoints={setPoints} label={alias} />
    </ThemeProvider>
  );
};

export default ThirdCasePage;
