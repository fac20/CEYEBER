import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Badge, Avatar } from '../components/Image';
import { H1, H2, Text } from '../components/Text';
import { casesPageTheme } from './../components/themes';
import styled from 'styled-components';
import Checklist from '../components/Checklist.js';

const BadgeDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const SubTitle = styled(H2)`
  margin-left: 2.5rem;
  align-self: flex-start;
`;

const CasesPage = ({ alias, cases }) => {
  const displayBadges = cases => {
    let badgeArray = [];
    for (const property in cases) {
      badgeArray.push(<Badge badgeType={cases[property]} size="small" />);
    }
    return badgeArray;
  };

  const Badges = displayBadges(cases);

  return (
    <ThemeProvider theme={casesPageTheme}>
      <H1>Cases solved</H1>
      <Avatar className="avatar" />
      <Text>Alias: {alias}</Text>
      <Checklist cases={cases} />
      <SubTitle>Badge</SubTitle>
      <BadgeDisplay>{Badges}</BadgeDisplay>
    </ThemeProvider>
  );
};
export default CasesPage;
