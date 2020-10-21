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

//make whichever buttons have been clicked appear on the screen
//IDEA:
// create state of answer array with empty array here
// answer buttons have access to array and setarray
// each time the button is clicked, add its label to the answer array
// display answer array on the screen in a text component
//started: created state on answerpage level, imported text component
//next: give props to answer buttons on thier page and pass them down here
//display current state of answer array on page

//OR:could this be a useEffect?
//every time the points variable changes a button must have been clicked
//add the label of the button click to a text component on the page

//make next page be a badge if you get a certain number of points!

const ThirdCasePage = ({ points, setPoints, alias }) => {
  const title = 'Case Three';
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
        nextPage={'/try-again'}
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
