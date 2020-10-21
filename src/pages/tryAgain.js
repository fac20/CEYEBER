import React from 'react';

import { Button } from '../components/Buttons';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { H1, H2 } from '../components/Text';
import { gameOverPageTheme } from './../components/themes';

const TryAgain = ({ failMessage }) => {
  const history = useHistory();
  const createProfile = () => {
    history.goBack();
  };

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
