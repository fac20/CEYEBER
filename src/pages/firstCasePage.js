import React from 'react';
import { ThemeProvider } from 'styled-components';
import { fieldPageTheme } from './../components/themes';
import { ImageQuestion } from './../components/Questions';
import {
  CorrectButton,
  IgnoreButton,
  WrongButton
} from './../components/AnswerButtons';

//TODO add buttons

const FirstCasePage = ({ points, setPoints }) => {
  const title = 'Case One';
  const img = '';
  const question =
    'Your friend/family member Sam just shared a VIRAL video of a ...';

  return (
    <ThemeProvider theme={fieldPageTheme}>
      <ImageQuestion title={title} img={img} question={question} />
      <CorrectButton points={points} setPoints={setPoints} label="Report" />
      <IgnoreButton
        points={points}
        setPoints={setPoints}
        label="Ignore"
        nextPage={'try-again'}
      />
      <WrongButton
        points={points}
        setPoints={setPoints}
        label="Share"
        nextPage={'try-again'}
      />
    </ThemeProvider>
  );
};

export default FirstCasePage;
