import React from 'react';
import styled from 'styled-components';
import { Text } from './Text.js';

const UL = styled.ul`
  align-self: flex-start;
  flex-direction: column;
`;

const LI = styled(Text)`
  text-align: left;

  ${props => (props.case.case1 === props.name ? 'color: var(--color-1)' : '')};
  ${props => (props.case.case2 === props.name ? 'color: var(--color-1)' : '')};
  ${props => (props.case.case3 === props.name ? 'color: var(--color-1)' : '')};

  &:before {
    ${props => (props.case.case2 === props.name ? 'content: "✅ "' : '')};
    ${props => (props.case.case3 === props.name ? 'content: "✅ "' : '')};
    ${props => (props.case.case1 === props.name ? 'content: "✅ "' : '')};
  }
`;

const Checklist = ({ badgesWon }) => {
  return (
    <>
      <UL>
        <LI case={badgesWon} name="Troll Hunter">
          Social media Fake News
        </LI>
        <LI case={badgesWon} name="Thief Buster">
          Evading Deception: Phish Phood
        </LI>
        <LI case={badgesWon} name="Hack Attack">
          Defeat the Hacker: Password Change
        </LI>
      </UL>
    </>
  );
};

export default Checklist;
