import React from 'react';
import { ThemeProvider } from 'styled-components';
import { badgePageTheme } from './../components/themes';
import { H1, Text } from './../components/Text';
import { Badge } from './../components/Image';
import { Button } from './../components/Buttons';
import { useHistory } from 'react-router-dom';
import collectData from 'collectData';

const BadgePage = ({
  alias,
  badgeType,
  taskName,
  setTaskName,
  answers,
  setAnswers
}) => {
  const history = useHistory();

  collectData(taskName, answers, setAnswers, 3);

  const showbadgesWon = () => {
    if (taskName === 'Password Challenge') {
      setTaskName('Complete');
    }
    history.push('/cases');
  };

  return (
    <ThemeProvider theme={badgePageTheme}>
      <H1>You earned the badge!</H1>
      <Text>Well done {alias}!</Text>
      <Badge badgeType={badgeType} />
      <Button onClick={showbadgesWon}>Accept</Button>
    </ThemeProvider>
  );
};

export default BadgePage;
