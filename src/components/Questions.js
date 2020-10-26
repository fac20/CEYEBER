import React from 'react';
import { H1, H2, Text } from './Text';
import { Img } from './Image';
import { Label } from './Forms';
import { useHistory } from 'react-router-dom';
import { Progress } from './ProgressBar';

export const ImageQuestion = ({ title, img, question }) => {
  return (
    <>
      <H1>{title}</H1>
      <Img src={img} />
      <Text>{question}</Text>
    </>
  );
};

//timed question
//progress bar of time ticking down
//multiple choice options to add to password- numbers, captial letters, punctuation, their alias,
//cat, dog, bird
//adding something that makes your password stronger gives 2 points
//adding something that makes it weaker takes points away
//if points is high when timer runs out, you win badge
//if low, try again

export function TimedQuestion({
  title,
  img,
  question,
  points,
  timeLeft,
  setTimeLeft,
  nextPage,
  taskName
}) {
  //states of timeLeft and setTimeLeft held on page
  //remember to import useHistory on the page!
  const history = useHistory();

  React.useEffect(() => {
    //  if there is not timeLeft then go to try again page
    //if (timeLeft <= 0) history.push(nextPage);

    // else create set interval function for every second
    const startInterval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(startInterval);
  }, [timeLeft, setTimeLeft, history, nextPage]);
  //esLint wanted dependencies of history and nextPage so have added them
  //doesn't seem to affect page working

  return (
    <>
      <H2>{timeLeft}</H2>
      <Label htmlFor="game">Time Left:</Label>
      <Progress id="game" value={timeLeft} max="30">
        {' '}
        {timeLeft}{' '}
      </Progress>
      <H1>{title}</H1>
      <Img src={img} />
      <Text>{question}</Text>
    </>
  );
}
