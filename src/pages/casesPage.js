import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Badge, Avatar } from '../components/Image';
import { H1, H2, Text } from '../components/Text';
import { casesPageTheme } from './../components/themes';
import styled from 'styled-components';
import Checklist from '../components/Checklist.js';
import { Button } from '../components/Buttons';
import { useHistory } from 'react-router-dom';

const BadgeDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const SubTitle = styled(H2)`
  margin-left: 2.5rem;
  align-self: flex-start;
`;

const CasesPage = ({ alias, badgesWon, taskName, theme, setTheme }) => {

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
      <H1>Cases solved</H1>
      <Avatar className="avatar" />
      <Text>Alias: {alias}</Text>
      <Checklist badgesWon={badgesWon} />
      <SubTitle>Badge</SubTitle>
      <BadgeDisplay>{Badges}</BadgeDisplay>
      {taskName !== 'Password Challenge' ? (
        <Button onClick={nextChallenge}>Next Case</Button>
      ) : null}
    </ThemeProvider>
  );
};
export default CasesPage;
