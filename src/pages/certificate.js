import React from 'react';
import { Button } from '../components/Buttons';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { sendAnswers } from './../api/api';
import { H1, H2 } from '../components/Text';
import { Wrapper } from '../components/Wrapper';
import { badgePageTheme } from '../components/themes';

const Congrats = ({
  setPoints,
  setBadgesWon,
  setTaskName,
  agent,
  answers,
  setAnswers
}) => {
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
      .catch(err => console.error(err));
  };

  return (
    <ThemeProvider theme={badgePageTheme}>
      <Wrapper>
        <H1>CONGRATS
          <br/>
          {agent}!</H1>
        <div className="trophy" />
        <H2>
          You have won all <br /> of the badges!
          <br />
        </H2>
        <Button onClick={handleClick}>PLAY AGAIN</Button>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Congrats;
