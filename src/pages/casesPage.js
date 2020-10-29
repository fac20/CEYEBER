import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Badge, Avatar } from '../components/Image';
import { H1, H2, Text } from '../components/Text';
import { casesPageTheme } from './../components/themes';
import styled from 'styled-components';
import Checklist from '../components/Checklist.js';
import { Button } from '../components/Buttons';
import { useHistory } from 'react-router-dom';
import { Wrapper } from './../components/Wrapper';

const BadgeDisplay = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CasesPage = ({ agent, badgesWon, taskName, theme, setTheme }) => {

  setTheme('dark-theme');
  const displayBadges = badgesWon => {
    let badgeArray = [];
    for (const property in badgesWon) {
      badgeArray.push(<Badge badgeType={badgesWon[property]} size="small" />);
    }
    return badgeArray;
  };

  const history = useHistory();

  const nextChallenge = () => {
    if (taskName === 'Troll Hunter') {
      history.push('/second-case-intro');
    } else if (taskName === 'Thief Buster') {
      history.push('/third-case-intro');
    }
  };

  const Badges = displayBadges(badgesWon);

  return (
    <ThemeProvider theme={casesPageTheme}>
      <Wrapper>
        <H1>Cases solved</H1>
        <Avatar className="avatar" />
        <Text>agent: {agent}</Text>
        <Checklist badgesWon={badgesWon} />
        <H2>Badges</H2>
        <BadgeDisplay>{Badges}</BadgeDisplay>
        {taskName !== 'Hack Attack' ? (
          <Button onClick={nextChallenge}>Next Case</Button>
        ) : null}
      </Wrapper>
    </ThemeProvider>
  );
};
export default CasesPage;
