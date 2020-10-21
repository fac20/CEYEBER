import React from 'react';
import { ThemeProvider } from 'styled-components';
import { fieldPageTheme } from './../components/themes';
import { ImageQuestion } from './../components/Questions';
import {
  CorrectButton,
  IgnoreButton,
  WrongButton
} from './../components/AnswerButtons';

const SecondCasePage = ({ points, setPoints }) => {
  const title = 'Case Two';
  const question = `Dr Goblin thinks climate change is FAKE
    NEWS. Check out Dr Goblin’s latest post: `;

  return (
    <ThemeProvider theme={fieldPageTheme}>
      <ImageQuestion title={title} question={question} />
      <CorrectButton
        points={points}
        setPoints={setPoints}
        label="Check
        whether Dr Goblin’s claim is true"
        nextPage={'/badge'}
      />
      <IgnoreButton
        points={points}
        setPoints={setPoints}
        label="Ignore it- he is a 'Dr' after all!"
        nextPage={'try-again'}
      />
      <WrongButton
        points={points}
        setPoints={setPoints}
        label="Like Dr Goblin’s post]"
        nextPage={'try-again'}
      />
    </ThemeProvider>
  );
};

export default SecondCasePage;
