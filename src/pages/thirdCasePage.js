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

const ThirdCasePage = ({ points, setPoints, alias, pageNum, setPageNum }) => {
  const title = 'Case Three';
  React.useEffect(() => {
    setPageNum(3);
  }, [setPageNum]);

  const img = hacker;
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
        img={img}
        question={question}
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        nextPage={points <= 10 && timeLeft === 0 ? '/try-again' : '/badge'}
      />

      <PasswordText>{answerArray}</PasswordText>
      <div>
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
          timeLeft={timeLeft}
          pageNum={pageNum}
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
          timeLeft={timeLeft}
          pageNum={pageNum}
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
          timeLeft={timeLeft}
          pageNum={pageNum}
          answerArray={answerArray}
          setAnswerArray={setAnswerArray}
        />
        <WrongButton
          points={points}
          setPoints={setPoints}
          label={alias}
          timeLeft={timeLeft}
          pageNum={pageNum}
          answerArray={answerArray}
          setAnswerArray={setAnswerArray}
        />
      </div>
    </ThemeProvider>
  );
};

export default ThirdCasePage;
