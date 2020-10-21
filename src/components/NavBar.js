import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  background-color: var(--color-3);
  padding: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin-bottom: 1rem;
`;

const Li = styled.li`
  padding: 2rem;
  font-family: var(--info-font);
  font-size: 1.2rem;
`;

export const NavBar = ({ points }) => {
  return (
    <StyledNavBar>
      <Li>
        <PointsBar points={points} />
      </Li>
      <Li>
        <Link to="/training-manual">Training Manual</Link>
      </Li>
      <Li>
        <Link to="/profile">Profile</Link>
      </Li>
    </StyledNavBar>
  );
};

const PointsBar = ({ points }) => {
  return (
    <>
      <label htmlFor="gamePoints">{points} Points</label>
      <progress id="gamePoints" value={points} max="11"></progress>
    </>
  );
};
