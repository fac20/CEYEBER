import React from 'react';
import { ThemeProvider } from 'styled-components';
import { fieldPageTheme } from './../components/themes';
import { TimedQuestion } from './../components/Questions';
import { Text } from './../components/Text';

import {
  CorrectButton,
  IgnoreButton,
  WrongButton
} from './../components/AnswerButtons';

const ThirdCasePage = ({ points, setPoints, alias, pageNum, setPageNum }) => {
  const title = 'Case Three';
  setPageNum(3);
  const question = `
    A hacker has been detected nearby. 
    You haven’t changed your password in years!
    Quick, make your password stronger!`;

  const [timeLeft, setTimeLeft] = React.useState(30);
  const [answerArray, setAnswerArray] = React.useState([]);

  return (
    <ThemeProvider theme={fieldPageTheme}>
      <TimedQuestion
        title={title}
        question={question}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        nextPage={points <= 10 ? '/try-again' : '/badge'}
      />

      <Text>{answerArray}</Text>

      <CorrectButton
        points={points}
        setPoints={setPoints}
        label="!!"
        answerArray={answerArray}
        setAnswerArray={setAnswerArray}
      />
      <IgnoreButton
        points={points}
        setPoints={setPoints}
        label="dog"
        answerArray={answerArray}
        setAnswerArray={setAnswerArray}
      />
      <CorrectButton
        points={points}
        setPoints={setPoints}
        label="01"
        answerArray={answerArray}
        setAnswerArray={setAnswerArray}
      />
      <WrongButton
        points={points}
        setPoints={setPoints}
        label="password"
        answerArray={answerArray}
        setAnswerArray={setAnswerArray}
      />
      <CorrectButton
        points={points}
        setPoints={setPoints}
        label="?"
        answerArray={answerArray}
        setAnswerArray={setAnswerArray}
      />
      <IgnoreButton
        points={points}
        setPoints={setPoints}
        label="abc"
        answerArray={answerArray}
        setAnswerArray={setAnswerArray}
      />
      <WrongButton
        points={points}
        setPoints={setPoints}
        label={alias}
        answerArray={answerArray}
        setAnswerArray={setAnswerArray}
      />
    </ThemeProvider>
  );
};

export default ThirdCasePage;
