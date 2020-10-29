import React from 'react';
import { ThemeProvider } from 'styled-components';
import { fieldPageTheme } from './../components/themes';
import { ImageQuestion } from './../components/Questions';
import {
  CorrectButton,
  IgnoreButton,
  WrongButton
} from './../components/AnswerButtons';
import { Wrapper } from './../components/Wrapper';
import netflixMessage from './../images/netflixMessage.jpg';

const SecondCasePage = ({
  points,
  setPoints,
  taskName,
  setTaskName,
  badgesWon,
  setBadgesWon,
  theme,
  setTheme,
  answers,
  setAnswers
}) => {
  setTheme('dark-theme');
  const title = 'Case Two';

  React.useEffect(() => {
    setTaskName('Thief Buster');
  }, []);

  const img = netflixMessage;
  const question = `Read this message from Netflix and decide 
  which action to take:`;

  return (
    <ThemeProvider theme={fieldPageTheme}>
      <Wrapper>
        <ImageQuestion title={title} img={img} question={question} />
        <CorrectButton
          points={points}
          setPoints={setPoints}
          label="Doesn’t look right, 
        report to Netflix"
          nextPage={'/badge'}
          taskName={taskName}
          setBadgesWon={setBadgesWon}
          badgesWon={badgesWon}
          answers={answers}
          setAnswers={setAnswers}
        />
        <IgnoreButton
          points={points}
          setPoints={setPoints}
          label="Don’t know, better to
        ignore it"
          nextPage={'try-again'}
          answers={answers}
          setAnswers={setAnswers}
          taskName={taskName}
        />
        <WrongButton
          points={points}
          setPoints={setPoints}
          label="Click the link - this is from Netflix"
          nextPage={'try-again'}
          answers={answers}
          setAnswers={setAnswers}
          taskName={taskName}
        />
      </Wrapper>
    </ThemeProvider>
  );
};

export default SecondCasePage;
