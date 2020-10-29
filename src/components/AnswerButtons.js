import React from 'react';
import { Button } from './Buttons.js';
import { useHistory } from 'react-router-dom';
import { collectData } from './collectData';

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
  disabled,
  answers,
  setAnswers, 
  passwordPoints,
  setPasswordPoints
}) {
  const history = useHistory();
  const handleCorrectClick = () => {
    //change the number of points the player has
    // if (points >= 8) {
    //   setPoints(11);
    // } else if (points < 8){
    //   setPoints(points + 3);
    // }

    // if (taskName === 'Troll Hunter') {
    //   setBadgesWon({ ...badgesWon, case1: taskName });
    //   collectData(taskName, answers, setAnswers, 3);
    // }
    // if (taskName === 'Thief Buster') {
    //   setBadgesWon({ ...badgesWon, case2: taskName });
    //   collectData(taskName, answers, setAnswers, 3);
    // }

    if (taskName === 'Password Challenge') {
      setAnswerArray([...answerArray, label]);
      setPasswordPoints((oldScore) => oldScore +3)
      setBadgesWon({ ...badgesWon, case3: taskName });
    } else {

      if (points >8){
        setPoints(11);
      }
      else {
        setPoints(points + 3);
      }

      if (taskName === 'Troll Hunter') {
        setBadgesWon({ ...badgesWon, case1: taskName });
        collectData(taskName, answers, setAnswers, 3);
      }

      if (taskName === 'Thief Buster') {
        setBadgesWon({ ...badgesWon, case2: taskName });
        collectData(taskName, answers, setAnswers, 3);
      }
      

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
  disabled,
  answers,
  setAnswers,
  passwordPoints,
  setPasswordPoints
}) {
  const history = useHistory();

  const handleWrongClick = () => {
    //change the number of points the player has
    // if (points > 0) {
    //   setPoints(points - 2);
    // }

    // if (taskName !== 'Password Challenge') {
    //   collectData(taskName, answers, setAnswers, 10);
    //   history.push(nextPage);
      
    // }

    //third task special case
    if (taskName === 'Password Challenge') {
      setAnswerArray([...answerArray, label]);
      setPasswordPoints((oldScore) => oldScore -2)
    } else {

      if (points > 0) {
        setPoints(points - 2);
      }

      collectData(taskName, answers, setAnswers, 10);
      history.push(nextPage);
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
  disabled,
  answers,
  setAnswers,
  passwordPoints,
  setPasswordPoints
}) {
  const history = useHistory();

  const handleIgnoreClick = () => {
    //change the number of points the player has
    // if (points > 0) {
    //   setPoints(points - 1);
    // }

    // if (taskName !== 'Password Challenge') {
    //   collectData(taskName, answers, setAnswers, -1);
    //   history.push(nextPage);
    // }

    //third task special case
    if (taskName === 'Password Challenge') {
      setAnswerArray([...answerArray, label]);
      setPasswordPoints((oldScore) => oldScore -1)
    } else {

      if (points > 0) {
        setPoints(points - 1);
      }

      collectData(taskName, answers, setAnswers, -1);
      history.push(nextPage);
    }
  };

  return (
    <Button disabled={disabled} onClick={handleIgnoreClick}>
      {label}
    </Button>
  );
}
