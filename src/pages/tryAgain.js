import React from 'react';

import { Button } from '../components/Buttons';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { H1, H2 } from '../components/Text';
import { gameOverPageTheme } from './../components/themes';

const TryAgain = () => {
  const history = useHistory();
  const createProfile = () => {
    history.goBack();
  };

  return (
    <ThemeProvider theme={gameOverPageTheme}>
      <H1>Incorrect!</H1>
      <div className="alert" />
      <H2>
        Have a look at the case again.
        <br /> If you are unsure information is
        <br /> true,try to look it up and see if more
        <br /> than one trusted source is reporting it.
      </H2>
      <Button onClick={createProfile}>TRY AGAIN</Button>
    </ThemeProvider>
  );
};

export default TryAgain;
