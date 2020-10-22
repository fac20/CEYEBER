import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { H1, H2, Text } from '../components/Text.js';
import { caseIntroPage } from '../components/themes.js';

const TheGuyImage = styled.div``;

const Card = styled.div`
  background-color: var(--color-6);
  border-radius: 12px;
  align-items: center;
  margin: 2rem;
  padding: 2rem;
`;

const FirstCaseIntro = () => {
  return (
    <ThemeProvider theme={caseIntroPage}>
      <Card>
        <H1>1st Case: Hunting the trolls</H1>
        <Text>
          Find the people
          <br />
          who are spreading the fake news
        </Text>
        <TheGuyImage className="theguy" />
      </Card>
    </ThemeProvider>
  );
};

export default FirstCaseIntro;
