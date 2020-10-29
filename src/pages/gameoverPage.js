import React from 'react';
import { Button } from '../components/Buttons';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { H1, H2 } from '../components/Text';
import { Container } from '../components/Forms';
import { gameOverPageTheme } from '../components/themes';

const GameOver = ({ points, setPoints, setTaskName, setBadgesWon }) => {
  const history = useHistory();
  const landingPage = () => {
    setPoints(2);
    setTaskName(null);
    setBadgesWon({
      case1: null,
      case2: null,
      case3: null
    });

    history.push('/');
    
  };

  return (
    <Container>
      <ThemeProvider theme={gameOverPageTheme}>
        <div className="skull" />
        <H1>GAME OVER!</H1>
        <H2>
          Oh no! You have lost a badge!
          <br />
          Tip: Go back to the tutorial to learn tips
          <br /> on how to spot fake news
        </H2>
        <Button onClick={landingPage}>TRY AGAIN</Button>
      </ThemeProvider>
    </Container>
  );
};

export default GameOver;
