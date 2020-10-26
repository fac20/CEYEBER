import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { H1, Text, SpeechBubbleText } from './Text.js';
import { caseIntroPage } from './themes.js';
import { Button } from './Buttons';
import { useHistory } from 'react-router-dom';

const TheGuyImage = styled.div``;

const Intro = () => {
  const history = useHistory();

  const goToTheMission = () => {
    history.push('/first-case-task');
  };

  return (
    <ThemeProvider theme={caseIntroPage}>
      <H1>1st Case: Hunting the trolls</H1>
      <div className="speech-bubble">
        <SpeechBubbleText>
          Find the people who are spreading the fake news
        </SpeechBubbleText>
      </div>
      <TheGuyImage className="theguy" />
      <Text>
        Your mission is to choose which of the following people on Twitter are
        spreading false information.{' '}
      </Text>
      <Button onClick={goToTheMission}>Accept</Button>
    </ThemeProvider>
  );
};

export default Intro;
