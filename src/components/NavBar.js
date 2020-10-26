import React from 'react';
import { Link } from 'react-router-dom';
import { Label } from './Forms';
import { Progress } from './ProgressBar';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { navBarTheme } from './../components/themes';
import { useHistory } from 'react-router-dom';

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

export const NavBar = ({ points, timeLeft }) => {
  return (
    <ThemeProvider theme={navBarTheme}>
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
            <PointsBar points={points} timeLeft={timeLeft} />
          </Li>
        </Ul>
      </StyledNavBar>
    </ThemeProvider>
  );
};

const PointsBar = ({ points, timeLeft, taskName }) => {
  const history = useHistory();

  React.useEffect(() => {
    if (taskName !== 'passwordChallenge' && points <= 0) {
      history.push('/game-over');
    }
    if (taskName === 'passwordChallenge' && points <= 0 && timeLeft === 0) {
      history.push('/game-over');
    }
  }, [points, timeLeft, taskName]);
  return (
    <>
      <Label htmlFor="gamePoints">{points} Points</Label>
      <Progress id="gamePoints" value={points} max="11"></Progress>
    </>
  );
};
