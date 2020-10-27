import React from 'react';
import { ThemeProvider } from 'styled-components';
import { fieldPageTheme } from './../components/themes';
import { TimedQuestion } from './../components/Questions';
import { PasswordText } from './../components/Text';
import hacker from './../images/hacker.gif';

import {
  CorrectButton,
  IgnoreButton,
  WrongButton
} from './../components/AnswerButtons';

const ThirdCasePage = ({
  points,
  setPoints,
  alias,
  taskName,
  setTaskName,
  timeLeft,
  setTimeLeft,
  badgesWon,
  setBadgesWon,
  theme, setTheme
}) => {
  setTheme('dark-theme');
  const title = 'Case Three';
  console.log('Third task name is', taskName);

  React.useEffect(() => {
    setTaskName('Password Challenge');
  }, []);

  const img = hacker;
  const question = `
    A hacker has been detected nearby. 
    You haven’t changed your password in years!
    Quick, make your password stronger!`;

  const [answerArray, setAnswerArray] = React.useState([]);

  return (
    <ThemeProvider theme={fieldPageTheme}>
      <TimedQuestion
        title={title}
        img={img}
        question={question}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        taskName={taskName}
        // nextPage={points <= 10 && timeLeft === 0 ? '/try-again' : '/badge'}
      />

      <PasswordText>{answerArray}</PasswordText>
      <div>
        <CorrectButton
          points={points}
          setPoints={setPoints}
          label="!!"
          timeLeft={timeLeft}
          taskName={taskName}
          answerArray={answerArray}
          setAnswerArray={setAnswerArray}
          badgesWon={badgesWon}
          setBadgesWon={setBadgesWon}
          disabled={answerArray.join().length >= 24 ? true : false }
        />
        <IgnoreButton
          points={points}
          setPoints={setPoints}
          label="dog"
          timeLeft={timeLeft}
          taskName={taskName}
          answerArray={answerArray}
          setAnswerArray={setAnswerArray}
          disabled={answerArray.join().length >= 24 ? true : false }
        />
        <CorrectButton
          points={points}
          setPoints={setPoints}
          label="01"
          timeLeft={timeLeft}
          taskName={taskName}
          answerArray={answerArray}
          setAnswerArray={setAnswerArray}
          badgesWon={badgesWon}
          setBadgesWon={setBadgesWon}
          disabled={answerArray.join().length >= 24 ? true : false }
        />
        <WrongButton
          points={points}
          setPoints={setPoints}
          label="password"
          timeLeft={timeLeft}
          taskName={taskName}
          answerArray={answerArray}
          setAnswerArray={setAnswerArray}
          disabled={answerArray.join().length >= 24 ? true : false }
        />
        <CorrectButton
          points={points}
          setPoints={setPoints}
          label="?"
          timeLeft={timeLeft}
          taskName={taskName}
          answerArray={answerArray}
          setAnswerArray={setAnswerArray}
          badgesWon={badgesWon}
          setBadgesWon={setBadgesWon}
          disabled={answerArray.join().length >= 24 ? true : false }
        />
        <IgnoreButton
          points={points}
          setPoints={setPoints}
          label="abc"
          timeLeft={timeLeft}
          taskName={taskName}
          answerArray={answerArray}
          setAnswerArray={setAnswerArray}
          disabled={answerArray.join().length >= 24 ? true : false }
        />
        <WrongButton
          points={points}
          setPoints={setPoints}
          label={alias}
          timeLeft={timeLeft}
          taskName={taskName}
          answerArray={answerArray}
          setAnswerArray={setAnswerArray}
          disabled={answerArray.join().length >= 24 ? true : false }
        />
      </div>
    </ThemeProvider>
  );
};

export default ThirdCasePage;
