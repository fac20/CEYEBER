import React from 'react';
import { Button } from '../components/Buttons';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { sendAnswers } from './../api/api';
import { H1, H2 } from '../components/Text';
import { Wrapper } from '../components/Wrapper';
import { gameOverPageTheme } from '../components/themes';

const GameOver = ({ points, setPoints, setTaskName, setBadgesWon, answers, setAnswers }) => {
  const history = useHistory();

  const handleClick = () => {
    sendAnswers(answers)
    .then(() => {
      setPoints(2);
      setTaskName(null);
      setBadgesWon({
        case1: null,
        case2: null,
        case3: null
      });
      setAnswers({
        q1a1: null,
        q1a2: null,
        q2a1: null,
        q2a2: null,
        q3a1: null,
        q3a2: null
      }); 
      history.push('/first-case-intro');
    })
    .catch(err => 
      console.error(err));
  };


  return (
    <ThemeProvider theme={gameOverPageTheme}>
      <Wrapper>
        <H1>GAME OVER!</H1>
        <div className="skull" />
        <H2>
          Oh no! You have lost a badge!
          <br />
          Tip: Go back to the tutorial to learn tips
          <br /> on how to spot fake news
        </H2>
        <Button onClick={handleClick}>TRY AGAIN</Button>
      </Wrapper>
    </ThemeProvider>
  );
};

export default GameOver;
