import React from 'react';
import { ThemeProvider } from 'styled-components';
import { badgePageTheme } from './../components/themes';
import { H1, Text } from './../components/Text';
import { Badge } from './../components/Image';
import { Button } from './../components/Buttons';

const BadgePage = ({ alias, badgeType }) => {
  return (
    <ThemeProvider theme={badgePageTheme}>
      <H1>You earned the badge!</H1>
      <Text>Well done {alias}!</Text>
      <Badge badgeType={badgeType} />
      <Button>Accept</Button>
    </ThemeProvider>
  );
};

export default BadgePage;
