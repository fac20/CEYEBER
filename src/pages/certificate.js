import React from 'react';
import { Button } from '../components/Buttons';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { H1, H2 } from '../components/Text';
import { Container } from '../components/Forms';
import { badgePageTheme } from '../components/themes';

const Congrats = () => {
  const history = useHistory();
  const goTolandingPage = () => {
    history.push('/');
  };

  return (
    <Container>
      <ThemeProvider theme={badgePageTheme}>
        <div className="trophy" />
        <H1>CONGRATULATIONS!</H1>
        <H2>
          You have won all <br /> of the badges!
          <br />
        </H2>
        <Button onClick={goTolandingPage}>PLAY AGAIN</Button>
      </ThemeProvider>
    </Container>
  );
};

export default Congrats;
