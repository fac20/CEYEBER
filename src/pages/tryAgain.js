import React from 'react';
import { Button } from '../components/Buttons';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import { H1, H2 } from '../components/Text';
import { gameOverPageTheme } from './../components/themes';

const Container = styled.div`
  width: 80%;
  text-align: center;
  padding: 5rem;
`;

const AlertImage = styled.div`
  margin: auto;
`;

const TryAgain = ({
  failMessage,
  setTimeLeft,
  taskName,
  answers,
  setAnswers
}) => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
    setTimeLeft(30);
  };

  return (
    <ThemeProvider theme={gameOverPageTheme}>
      <Container>
        <H1>Incorrect!</H1>
        <AlertImage className="alert" />
        <H2>{failMessage}</H2>
        <Button onClick={handleClick}>TRY AGAIN</Button>
      </Container>
    </ThemeProvider>
  );
};

export default TryAgain;
