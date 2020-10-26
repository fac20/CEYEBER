import React from 'react';
import { Button } from './Buttons.js';
import { useHistory } from 'react-router-dom';

//CORRECT button:
export function CorrectButton({
  points,
  setPoints,
  label,
  timeLeft,
  taskName,
  answerArray,
  setAnswerArray,
  nextPage
}) {
  const history = useHistory();
  const handleCorrectClick = () => {
    //change the number of points the player has
    setPoints(points + 3);

    //third task special case
    if (taskName === 'passwordChallenge') {
      setAnswerArray([...answerArray, label]);
      if (timeLeft === 0) {
        if (points === 0) {
          history.push('/game-over');
        } else if (points < 10) {
          history.push(nextPage);
        }
      }
    }

    //go to the next page
    history.push(nextPage);
  };
  return <Button onClick={handleCorrectClick}>{label}</Button>;
}

//WRONG button:
export function WrongButton({
  points,
  setPoints,
  label,
  timeLeft,
  taskName,
  answerArray,
  setAnswerArray,
  nextPage
}) {
  const history = useHistory();
  const handleWrongClick = () => {
    //change the number of points the player has
    if (points > 0) {
      setPoints(points - 2);
    }

    //third task special case
    if (taskName === 'passwordChallenge') {
      setAnswerArray([...answerArray, label]);
      if (timeLeft === 0) {
        if (points === 0) {
          history.push('/game-over');
        } else if (points < 10) {
          history.push(nextPage);
        }
      }
    } else if (points === 0) {
      history.push('/game-over');
    } else if (points < 10) {
      //go to the next page
      history.push(nextPage);
    }
  };

  return <Button onClick={handleWrongClick}>{label}</Button>;
}

//IGNORE button:
export function IgnoreButton({
  points,
  setPoints,
  label,
  timeLeft,
  taskName,
  answerArray,
  setAnswerArray,
  nextPage
}) {
  const history = useHistory();

  const handleIgnoreClick = () => {
    //change the number of points the player has
    if (points > 0) {
      setPoints(points - 1);
    }

    //third task special case
    if (taskName === 'passwordChallenge') {
      setAnswerArray([...answerArray, label]);
      if (timeLeft === 0) {
        if (points === 0) {
          history.push('/game-over');
        } else if (points < 10) {
          history.push(nextPage);
        }
      }
    } else if (points === 0) {
      history.push('/game-over');
    } else if (points < 10) {
      //go to the next page
      history.push(nextPage);
    }
  };

  return <Button onClick={handleIgnoreClick}>{label}</Button>;
}
