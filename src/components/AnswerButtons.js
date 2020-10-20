import React from 'react';
import { Button } from './Buttons.js';

//CORRECT button:
export function CorrectButton({ points, setPoints, label }) {
  const handleCorrectClick = () => {
    //change the number of points the player has
    setPoints(points + 3);

    //go to the next page
  };
  return <Button onClick={handleCorrectClick}>{label}</Button>;
}

//WRONG button:
export function WrongButton({ points, setPoints, label }) {
  const handleWrongClick = () => {
    //change the number of points the player has
    setPoints(points - 2);

    //if player has no points left, render gameOver page
    // if (points <= 0) {
    //
    // }

    //go to the next page
  };

  return <Button onClick={handleWrongClick}>{label}</Button>;
}

//IGNORE button:
export function IgnoreButton({ points, setPoints, label }) {
  const handleIgnoreClick = () => {
    //change the number of points the player has
    setPoints(points - 1);

    //if player has no points left, render gameOver page
    // if (points <= 0) {
    //
    // }

    //go to the next page
  };

  return <Button onClick={handleIgnoreClick}>{label}</Button>;
}
