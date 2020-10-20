import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Buttons.js';

//TODO NavBar will take points prop
export const NavBar = ({ points }) => {
  return (
    <nav>
      <ul>
        <PointsBar points={points} />
        <li>
          <Link to="/training-manual">Training Manual</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

//TODO will take points prop instead of value of 2
//start with 2
const PointsBar = ({ points }) => {
  return (
    <>
      <label for="gamePoints">Points</label>
      <progress id="gamePoints" value={points} max="11"></progress>
    </>
  );
};
