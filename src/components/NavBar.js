import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = () => {
  return (
    <nav>
      <ul>
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
