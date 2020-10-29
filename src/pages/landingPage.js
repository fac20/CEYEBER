import React from 'react';
import { Title } from './../components/Text';
import { LandingPageForm } from './../components/Forms';
import { ThemeProvider } from 'styled-components';
import { landingPageTheme } from './../components/themes';
import { useHistory } from 'react-router-dom';
import { Wrapper } from './../components/Wrapper';
import { Globe } from './../components/Image'

const LandingPage = ({agent, setAgent}) => {
  const history = useHistory();
  history.push('/');
  

  return (
    <ThemeProvider theme={landingPageTheme}>
      <Wrapper>
        <Title />
        <Globe className="globe" />
        <LandingPageForm agent={agent} setAgent={setAgent} />
      </Wrapper>
    </ThemeProvider>
  );
};

export default LandingPage;
