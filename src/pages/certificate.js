import React from 'react';
import { Button } from '../components/Buttons';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { H1, H2 } from '../components/Text';
import { Container } from '../components/Forms';
import { badgePageTheme } from '../components/themes';

const Congrats = ({ points, setPoints }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
    setPoints(2);
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
        <Button onClick={handleClick}>PLAY AGAIN</Button>
      </ThemeProvider>
    </Container>
  );
};

export default Congrats;
