import React from 'react';
import { ThemeProvider } from 'styled-components';
import { fieldPageTheme } from './../components/themes';
import { ImageQuestion } from './../components/Questions';
import {
  CorrectButton,
  IgnoreButton,
  WrongButton
} from './../components/AnswerButtons';
import eagle from './../images/eagleTakesChild.png';

const FirstCasePage = ({ points, setPoints, setPageNum }) => {
  const title = 'Case One';

  React.useEffect(() => {
    setPageNum(1);
  }, [setPageNum]);

  const img = eagle;
  const question = `Your friend Sam just shared a VIRAL video of 
    a golden eagle picking up a child and flying away with it!`;

  return (
    <ThemeProvider theme={fieldPageTheme}>
      <ImageQuestion title={title} img={img} question={question} />
      <CorrectButton
        points={points}
        setPoints={setPoints}
        label="Check it's true or fake"
        nextPage={'/badge'}
      />
      <IgnoreButton
        points={points}
        setPoints={setPoints}
        label="Ignore the video"
        nextPage={'try-again'}
      />
      <WrongButton
        points={points}
        setPoints={setPoints}
        label="Share the video"
        nextPage={'try-again'}
      />
    </ThemeProvider>
  );
};

export default FirstCasePage;
