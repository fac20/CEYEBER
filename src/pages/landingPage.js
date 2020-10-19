import React from 'react';
import { Title } from './../components/Text';
import { LandingPageForm, Container } from './../components/Forms';
import { ThemeProvider } from 'styled-components';
import { landingPageTheme } from './../components/themes';

const LandingPage = () => {
  return (
    // <Container>
    <ThemeProvider theme={landingPageTheme}>
      <Title />
      <div class="globe" />
      <LandingPageForm />
    </ThemeProvider>
    // </Container>
  );
};

export default LandingPage;
