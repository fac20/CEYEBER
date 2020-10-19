import React from 'react';
import { Title } from './../components/Text';
import { LandingPageForm } from './../components/Forms';
import { ThemeProvider } from 'styled-components';
import { landingPageTheme } from './../components/themes';

const LandingPage = () => {
  return (
    <ThemeProvider theme={landingPageTheme}>
      <Title />
      <div class="globe" />
      <LandingPageForm />
    </ThemeProvider>
  );
};

export default LandingPage;
