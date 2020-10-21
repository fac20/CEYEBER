import React from 'react';
import { Button } from './Buttons.js';
import { useHistory } from 'react-router-dom';

//CORRECT button:
export function CorrectButton({
  points,
  setPoints,
  label,
  answerArray,
  setAnswerArray,
  nextPage
}) {
  const history = useHistory();
  const handleCorrectClick = () => {
    //change the number of points the player has
    setPoints(points + 3);

    if (window.location.pathname == '/third-case-task') {
      setAnswerArray([...answerArray, label]);
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
  answerArray,
  setAnswerArray,
  nextPage
}) {
  const history = useHistory();
  const handleWrongClick = () => {
    //change the number of points the player has
    setPoints(points - 2);

    if (window.location.pathname == '/third-case-task') {
      setAnswerArray([...answerArray, label]);
    }

    if (points <= 0) {
      console.log('yes');
      history.push('/game-over');
    } else {
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
  answerArray,
  setAnswerArray,
  nextPage
}) {
  const history = useHistory();

  const handleIgnoreClick = () => {
    //change the number of points the player has
    setPoints(points - 1);

    if (window.location.pathname == '/third-case-task') {
      setAnswerArray([...answerArray, label]);
    }

    //go to the next page
    if (points <= 0) {
      history.push('/game-over');
    } else {
      //go to the next page
      history.push(nextPage);
    }
  };

  return <Button onClick={handleIgnoreClick}>{label}</Button>;
}
