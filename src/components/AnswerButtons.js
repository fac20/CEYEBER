import React from 'react';
import { Button } from './Buttons.js';

//CORRECT button functions:
export default function CorrectButton({ points, setPoints }) {
  const handleCorrectClick = ({ points, setPoints }) => {
    //change the number of points the player has
    setPoints(points + 3);

    //go to the next page
  };
  return <Button onClick={handleCorrectClick}>Correct</Button>;
}

//WRONG button functions:
export function WrongButton({ points, setPoints }) {
  const handleWrongClick = ({ points, setPoints }) => {
    //change the number of points the player has
    setPoints(points - 2);

    //if player has no points left, render gameOver page
    // if (points <= 0) {
    //
    // }

    //go to the next page
  };

  return <Button onClick={handleWrongClick}>Wrong</Button>;
}

//IGNORE button functions:
export function IgnoreButton({ points, setPoints }) {
  const handleIgnoreClick = ({ points, setPoints }) => {
    //change the number of points the player has
    setPoints(points - 1);

    //if player has no points left, render gameOver page
    // if (points <= 0) {
    //
    // }

    //go to the next page
  };

  return <Button onClick={handleIgnoreClick}>Ignore</Button>;
}
