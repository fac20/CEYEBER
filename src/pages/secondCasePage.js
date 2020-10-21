import React from 'react';
import { ThemeProvider } from 'styled-components';
import { fieldPageTheme } from './../components/themes';
import { ImageQuestion } from './../components/Questions';
import {
  CorrectButton,
  IgnoreButton,
  WrongButton
} from './../components/AnswerButtons';

const SecondCasePage = ({ points, setPoints, pageNum, setPageNum }) => {
  const title = 'Case Two';
  setPageNum(2);
  const question = `Read this message from Netflix and decide 
  which action to take:`;

  return (
    <ThemeProvider theme={fieldPageTheme}>
      <ImageQuestion title={title} question={question} />
      <CorrectButton
        points={points}
        setPoints={setPoints}
        label="Doesn’t look right, 
        report to Netflix"
        nextPage={'/badge'}
      />
      <IgnoreButton
        points={points}
        setPoints={setPoints}
        label="Don’t know, better to
        ignore it"
        nextPage={'try-again'}
      />
      <WrongButton
        points={points}
        setPoints={setPoints}
        label="Click the link - this is from Netflix"
        nextPage={'try-again'}
      />
    </ThemeProvider>
  );
};

export default SecondCasePage;
