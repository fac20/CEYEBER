import React from 'react';
import { Button } from '../components/Buttons';
import { useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { Wrapper } from './../components/Wrapper';
import { H1, H2, Text } from '../components/Text';
import { gameOverPageTheme } from './../components/themes';

const AlertImage = styled.div`
  margin: auto;
`;

const TryAgain = ({ failMessage, setTimeLeft, lostScore }) => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
    setTimeLeft(30);
  };

  return (
    <ThemeProvider theme={gameOverPageTheme}>
      <Wrapper>
        <H1>Incorrect!</H1>
        <AlertImage className="alert" />
        <Text>You lost {lostScore}</Text>
        <H2>{failMessage}</H2>
        <Button onClick={handleClick}>TRY AGAIN</Button>
      </Wrapper>
    </ThemeProvider>
  );
};

export default TryAgain;
