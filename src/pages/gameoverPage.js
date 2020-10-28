import React from 'react';
import { Button } from '../components/Buttons';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { H1, H2 } from '../components/Text';
import { Container } from '../components/Forms';
import { gameOverPageTheme } from '../components/themes';

const GameOver = ({ points, setPoints }) => {
  const history = useHistory();
  const landingPage = () => {
    history.push('/');
    setPoints(2);
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
