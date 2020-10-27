import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { H1, Text, SpeechBubbleText } from './Text.js';
import { caseIntroPage } from './themes.js';
import { Button } from './Buttons';
import { useHistory } from 'react-router-dom';
import { task1, task2, task3 } from './taskIntroText';

const TheGuyImage = styled.div``;

const Intro = ({ setTaskName, taskName, theme, setTheme }) => {
  const history = useHistory();

  setTheme('light-theme');
  let task = {};
  if (taskName === null) {
    task = task1;
  }
  if (taskName === 'Troll Hunter') {
    task = task2;
  }
  if (taskName === 'Thief Buster') {
    task = task3;
  }

  const goToTheMission = () => {
    if (taskName === null) {
      history.push('/first-case-task');
    } else if (taskName === 'Troll Hunter') {
      history.push('/second-case-task');
    } else if (taskName === 'Thief Buster') {
      history.push('/third-case-task');
    }
  };

  return (
    <ThemeProvider theme={caseIntroPage}>
      <H1>{task.title}</H1>
      <div className="speech-bubble">
        <SpeechBubbleText>{task.bubble}</SpeechBubbleText>
      </div>
      <TheGuyImage className="theguy" />
      <Text>{task.message}</Text>
      <Button onClick={goToTheMission}>Accept</Button>
    </ThemeProvider>
  );
};

export default Intro;
