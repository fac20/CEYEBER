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

export const NavBar = ({
  setPoints,
  points,
  timeLeft,
  taskName,
  badgesWon
}) => {
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
            <PointsBar
              points={points}
              timeLeft={timeLeft}
              taskName={taskName}
              setPoints={setPoints}
              badgesWon={badgesWon}
            />
          </Li>
        </Ul>
      </StyledNavBar>
    </ThemeProvider>
  );
};

const PointsBar = ({ points, timeLeft, taskName, setPoints, badgesWon }) => {
  const history = useHistory();
  console.log(taskName !== 'Password Challenge', taskName);

  React.useEffect(() => {
    if (points <= 0) {
      setPoints(0);
    } else if (points >= 20) {
      setPoints(20);
    }
    if (taskName !== 'Password Challenge' && points <= 0) {
      console.log('ITS HERE ACTUALLLY');
      history.push('/game-over');
    }
    if (taskName === 'Password Challenge' && timeLeft === 0) {
      if (points <= 0) {
        console.log('ITS HERE');
        history.push('/game-over');
      } else if (points > 0 && points <= 10) {
        history.push('/try-again');
      } else if (points > 10) {
        history.push('/badge');
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
    
      <Label htmlFor="gamePoints">{points} {points > 1 ? 'Points' : 'Point' }</Label>
      <Progress id="gamePoints" value={points} max="11"></Progress>
    </>
  );
};
