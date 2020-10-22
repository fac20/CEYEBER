import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavBar = styled.nav`
  background-color: var(--color-3);
  padding: 0
  list-style-type: none;
  margin-bottom: 1rem;
  width:100%;
`;

const InlineDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Ul = styled.ul`
  /* display: flex; */

  padding-left: 0;
`;

const Li = styled.li`
  /* padding: 2rem; */
  font-family: var(--info-font);
  font-size: 1.2rem;
  list-style-type: none;
  display: inline-block;
  width: 50%;
`;

export const NavBar = ({ points }) => {
  return (
    <StyledNavBar>
      <Ul>
        <InlineDiv>
          <Li>
            <Link to="/training-manual">Training Manual</Link>
          </Li>
          <Li>
            <Link to="/profile">Profile</Link>
          </Li>
        </InlineDiv>
        <Li>
          <PointsBar points={points} />
        </Li>
      </Ul>
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
