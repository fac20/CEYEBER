import React from 'react';
import { Button } from './Buttons.js';
import { useHistory } from 'react-router-dom';
import collectData from 'collectData';

//CORRECT button:
export function CorrectButton({
  points,
  setPoints,
  label,
  timeLeft,
  taskName,
  answerArray,
  setAnswerArray,
  badgesWon,
  setBadgesWon,
  nextPage,
  disabled
}) {
  const history = useHistory();
  const handleCorrectClick = () => {
    //change the number of points the player has
    if (points >= 8) {
      setPoints(11);
    } else {
      setPoints(points + 3);
    }

    if (taskName === 'Troll Hunter') {
      setBadgesWon({ ...badgesWon, case1: taskName });
    }
    if (taskName === 'Thief Buster') {
      setBadgesWon({ ...badgesWon, case2: taskName });
    }

    //third task special case
    if (taskName === 'Password Challenge') {
      setAnswerArray([...answerArray, label]);
      setBadgesWon({ ...badgesWon, case3: taskName });
    }

    //go to the next page
    history.push(nextPage);
  };
  return (
    <Button disabled={disabled} onClick={handleCorrectClick}>
      {label}
    </Button>
  );
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
  nextPage,
  disabled
}) {
  const history = useHistory();

  const handleWrongClick = () => {
    //change the number of points the player has
    if (points > 0) {
      setPoints(points - 2);
    }

    if (taskName !== 'Password Challenge') {
      history.push(nextPage);
    }

    //third task special case
    if (taskName === 'Password Challenge') {
      setAnswerArray([...answerArray, label]);
    }
  };

  return (
    <Button disabled={disabled} onClick={handleWrongClick}>
      {label}
    </Button>
  );
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
  nextPage,
  disabled
}) {
  const history = useHistory();

  const handleIgnoreClick = () => {
    //change the number of points the player has
    if (points > 0) {
      setPoints(points - 1);
    }

    if (taskName !== 'Password Challenge') {
      history.push(nextPage);
    }

    //third task special case
    if (taskName === 'Password Challenge') {
      setAnswerArray([...answerArray, label]);
    }
  };

  return (
    <Button disabled={disabled} onClick={handleIgnoreClick}>
      {label}
    </Button>
  );
}
