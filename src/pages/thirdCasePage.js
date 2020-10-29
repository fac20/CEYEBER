import React from 'react';
import { ThemeProvider } from 'styled-components';
import { fieldPageTheme } from './../components/themes';
import { TimedQuestion } from './../components/Questions';
import { PasswordText } from './../components/Text';
import hacker from './../images/hacker.gif';
import { collectData } from "./../components/collectData"

import {
  CorrectButton,
  IgnoreButton,
  WrongButton
} from './../components/AnswerButtons';

const ThirdCasePage = ({
  points,
  setPoints,
  agent,
  taskName,
  setTaskName,
  timeLeft,
  setTimeLeft,
  badgesWon,
  setBadgesWon,
  theme,
  setTheme,
  answers,
  setAnswers, 
  setPasswordPoints,
  passwordPoints
}) => {
  setTheme('dark-theme');
  const title = 'Case Three';
 

  if (timeLeft === 0){
    collectData(taskName, answers, setAnswers, passwordPoints);
    console.log(answers)  
  }

  React.useEffect(() => {
    setTaskName('Password Challenge');
  }, []);

  const img = hacker;
  const question = `
    A hacker has been detected nearby. 
    You haven’t changed your password in years!
    Quick, make your password stronger
    - get more than 10 points to win!`;

  const [answerArray, setAnswerArray] = React.useState([]);
  console.log(passwordPoints)

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
          passwordPoints={passwordPoints}
        setPasswordPoints={setPasswordPoints}
          label="!!"
          timeLeft={timeLeft}
          taskName={taskName}
          answerArray={answerArray}
          setAnswerArray={setAnswerArray}
          badgesWon={badgesWon}
          setBadgesWon={setBadgesWon}
          disabled={answerArray.join().length >= 24 ? true : false}
        />
        <IgnoreButton
          passwordPoints={passwordPoints}
          setPasswordPoints={setPasswordPoints}
          label="dog"
          timeLeft={timeLeft}
          taskName={taskName}
          answerArray={answerArray}
          setAnswerArray={setAnswerArray}
          disabled={answerArray.join().length >= 24 ? true : false}
        />
        <CorrectButton
          passwordPoints={passwordPoints}
          setPasswordPoints={setPasswordPoints}
          label="01"
          timeLeft={timeLeft}
          taskName={taskName}
          answerArray={answerArray}
          setAnswerArray={setAnswerArray}
          badgesWon={badgesWon}
          setBadgesWon={setBadgesWon}
          disabled={answerArray.join().length >= 24 ? true : false}
        />
        <WrongButton
          passwordPoints={passwordPoints}
          setPasswordPoints={setPasswordPoints}
          label="password"
          timeLeft={timeLeft}
          taskName={taskName}
          answerArray={answerArray}
          setAnswerArray={setAnswerArray}
          disabled={answerArray.join().length >= 24 ? true : false}
        />
        <CorrectButton
          passwordPoints={passwordPoints}
          setPasswordPoints={setPasswordPoints}
          label="?"
          timeLeft={timeLeft}
          taskName={taskName}
          answerArray={answerArray}
          setAnswerArray={setAnswerArray}
          badgesWon={badgesWon}
          setBadgesWon={setBadgesWon}
          disabled={answerArray.join().length >= 24 ? true : false}
        />
        <IgnoreButton
          passwordPoints={passwordPoints}
          setPasswordPoints={setPasswordPoints}
          label="abc"
          timeLeft={timeLeft}
          taskName={taskName}
          answerArray={answerArray}
          setAnswerArray={setAnswerArray}
          disabled={answerArray.join().length >= 24 ? true : false}
        />
        <WrongButton
          passwordPoints={passwordPoints}
          setPasswordPoints={setPasswordPoints}
          label={agent}
          timeLeft={timeLeft}
          taskName={taskName}
          answerArray={answerArray}
          setAnswerArray={setAnswerArray}
          disabled={answerArray.join().length >= 24 ? true : false}
        />
      </div>
    </ThemeProvider>
  );
};

export default ThirdCasePage;
