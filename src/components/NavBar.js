import React from 'react';
import { Link } from 'react-router-dom';
import { Label } from './Forms';
import { Progress } from './ProgressBar';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { navBarTheme } from './../components/themes';
import { useHistory } from 'react-router-dom';

export const StyledNavBar = styled.nav`
  background-color: ${props =>
    window.location.pathname.includes('intro')
      ? props.theme.lightBgColor
      : props.theme.darkBgColor};
  padding: 0;
  list-style-type: none;
  /* margin-bottom: 1rem; */
  width: 95%;
  border-bottom: solid 3px;
  border-color: ${props =>
    window.location.pathname.includes('intro')
      ? props.theme.pBarBgColor
      : props.theme.pBarColor};
`;

const InlineDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding-left: 0;
  @media only screen and (max-width: 460px) {
    flex-direction: column;
  };
`;

const Li = styled.li`
  margin: 0.5rem;
  font-family: var(--info-font);
  font-size: 1.2rem;
  list-style-type: none;
  display: inline-block;
  /* width: 50%; */
  color: ${props => props.theme.labelColor};
  transition: all 0.2s ease-in-out;
  :hover:not(.points) {
    transform: scale(1.1);
  }
`;

const StyledLink = styled(Link)`
  color: ${props =>
    window.location.pathname.includes('intro')
      ? props.theme.darkBgColor
      : props.theme.lightBgColor};
  :hover {
    color: ${props =>
      window.location.pathname.includes('intro')
        ? props.theme.darkBgColor
        : props.theme.labelColor};
  };
`;

export const NavBar = ({
  setPoints,
  points,
  timeLeft,
  taskName,
  badgesWon,
  setPasswordPoints,
  passwordPoints,
  setLostScore
}) => {
  return (
    <ThemeProvider theme={navBarTheme}>
      <StyledNavBar>
        <Ul>
            <Li>
              <StyledLink to="/training-manual">Training Manual</StyledLink>
            </Li>
          <InlineDiv>
            <Li className="points">
              <PointsBar
                points={points}
                timeLeft={timeLeft}
                taskName={taskName}
                setPoints={setPoints}
                badgesWon={badgesWon}
                setLostScore={setLostScore}
                passwordPoints={passwordPoints}
                setPasswordPoints={setPasswordPoints}
              />
            </Li>
          </InlineDiv>
        </Ul>
      </StyledNavBar>
    </ThemeProvider>
  );
};

const PointsBar = ({
  points,
  timeLeft,
  taskName,
  setPoints,
  badgesWon,
  setPasswordPoints,
  passwordPoints,
  setLostScore
}) => {
  const history = useHistory();

  React.useEffect(() => {
    if (points <= 0) {
      setPoints(0);
    } else if (points >= 20) {
      setPoints(20);
    }
    if (taskName !== 'Hack Attack' && points <= 0) {
      console.log('ITS HERE ACTUALLLY');
      history.push('/game-over');
    }
    if (taskName === 'Hack Attack' && timeLeft === 0) {
      if (passwordPoints < 0) {
        setPoints(points - 2);
        setLostScore('2 points');
        history.push('/try-again');
        setPasswordPoints(0);
      } else if (passwordPoints < 9) {
        setPoints(points - 1);
        setLostScore('1 point');
        history.push('/try-again');
        setPasswordPoints(0);
      } else if (passwordPoints >= 9) {
        setPoints(points + 3);
        history.push('/badge');
      }

      if (points <= 0) {
        history.push('/game-over');
      }
    }
    if (taskName === 'Complete') {
      if (Object.values(badgesWon).indexOf(null) === -1) {
        history.push('/certificate');
      } else {
        history.push('/cases');
      }
    }
  }, [points, timeLeft, taskName, badgesWon]);
  return (
    <>
      <Label htmlFor="gamePoints">
        {points} {points > 1 ? 'Points' : 'Point'}
      </Label>
      <Progress id="gamePoints" value={points} max="11"></Progress>
    </>
  );
};
