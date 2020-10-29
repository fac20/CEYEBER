import React from 'react';
import { H1 } from './../components/Text';
import { ThemeProvider } from 'styled-components';
import { landingPageTheme } from './../components/themes';
import { useHistory } from 'react-router-dom';
import { Button } from './../components/Buttons';

const NotFoundPage = () => {
  const history = useHistory();
  const goToLandingPage = () => {
    history.push('/');
  }
  return (
    <ThemeProvider theme={landingPageTheme}>
      <H1>Oops! Page not found!</H1>
      <div className="globe" />
      <Button onClick={goToLandingPage}>Go Back to Home</Button>
    </ThemeProvider>
  );
};

export default NotFoundPage;
