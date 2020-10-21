import React from 'react';
import { H1, Text } from './Text';
import { Img } from './Image';
import { useHistory } from 'react-router-dom';

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
  nextPage
}) {
  //states of timeLeft and setTimeLeft held on page
  //remember to import useHistory on the page!
  const history = useHistory();

  React.useEffect(() => {
    //  if there is not timeLeft then go to try again page
    if (timeLeft <= 0) history.push(nextPage);

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
      <h1>{timeLeft}</h1>
      <label htmlFor="game">Time Left:</label>
      <progress id="game" value={timeLeft} max="30">
        {' '}
        {timeLeft}{' '}
      </progress>
      <H1>{title}</H1>
      <Img src={img} />
      <Text>{question}</Text>
    </>
  );
}
