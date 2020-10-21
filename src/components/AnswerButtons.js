import React from 'react';
import { Button } from './Buttons.js';
import { useHistory } from 'react-router-dom';

//CORRECT button:
export function CorrectButton({ points, setPoints, label, nextPage }) {
  const handleCorrectClick = () => {
    //change the number of points the player has
    setPoints(points + 3);

    //go to the next page
  };
  return <Button onClick={handleCorrectClick}>{label}</Button>;
}

//WRONG button:
export function WrongButton({ points, setPoints, label, nextPage }) {
  const history = useHistory();
  const handleWrongClick = () => {
    //change the number of points the player has
    setPoints(points - 2);

    //if player has no points left, render gameOver page
    //not added or committed: produces an error
    // console.log(points);
    // if (points <= 0) {
    //   console.log('yes');
    //   nextPage = '/game-over';
    // }

    //go to the next page
    history.push(nextPage);
  };

  return <Button onClick={handleWrongClick}>{label}</Button>;
}

//IGNORE button:
export function IgnoreButton({ points, setPoints, label, nextPage }) {
  const history = useHistory();

  const handleIgnoreClick = () => {
    //change the number of points the player has
    setPoints(points - 1);

    //if player has no points left, render gameOver page
    // if (points <= 0) {
    //
    // }

    //go to the next page
    history.push(nextPage);
  };

  return <Button onClick={handleIgnoreClick}>{label}</Button>;
}
