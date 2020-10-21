import React from 'react';

import { Button } from '../components/Buttons';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { H1, H2 } from '../components/Text';
import { gameOverPageTheme } from './../components/themes';

const TryAgain = ({ failMessage, pageNum }) => {
  const history = useHistory();
  const createProfile = () => {
    history.goBack();
  };

  pageNum === 1
    ? (failMessage = 'page1 fail message')
    : pageNum === 2
    ? (failMessage = 'page2 fail message')
    : (failMessage = 'page3 fail message');

  return (
    <ThemeProvider theme={gameOverPageTheme}>
      <H1>Incorrect!</H1>
      <div className="alert" />
      <H2>{failMessage}</H2>
      <Button onClick={createProfile}>TRY AGAIN</Button>
    </ThemeProvider>
  );
};

export default TryAgain;
