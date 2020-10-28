import React from 'react';
import { Title } from './../components/Text';
import { LandingPageForm } from './../components/Forms';
import { ThemeProvider } from 'styled-components';
import { landingPageTheme } from './../components/themes';
import { useHistory } from 'react-router-dom';

const LandingPage = ({alias, setAlias}) => {
  const history = useHistory();
  history.push('/');
  return (
    <ThemeProvider theme={landingPageTheme}>
      <Title />
      <div className="globe" />
      <LandingPageForm alias={alias} setAlias={setAlias}/>
    </ThemeProvider>
  );
};

export default LandingPage;
