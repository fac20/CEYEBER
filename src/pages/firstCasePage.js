import React from 'react';
import { ThemeProvider } from 'styled-components';
import { fieldPageTheme } from './../components/themes';
import { ImageQuestion } from './../components/Questions';

const FirstCasePage = () => {
  const title = 'Case One';
  const img = '';
  const question =
    'Your friend/family member Sam just shared a VIRAL video of a ...';
  const answers = ['yes', 'no', 'maybe'];

  return (
    <ThemeProvider theme={fieldPageTheme}>
      <ImageQuestion
        title={title}
        img={img}
        question={question}
        answers={answers}
      />
    </ThemeProvider>
  );
};

export default FirstCasePage;
