import React from 'react';
import styled from 'styled-components';
import { Text } from './Text.js';

const UL = styled.ul`
  align-self: flex-start;
`;

const LI = styled(Text)`
  text-align: left;

  ${props => (props.case.case1 === props.name ? 'color: var(--color-1)' : '')};
  ${props => (props.case.case2 === props.name ? 'color: var(--color-1)' : '')};
  ${props => (props.case.case3 === props.name ? 'color: var(--color-1)' : '')};

  &:before {
    ${props =>
      props.case.case3 === props.name ? 'content: "✅ "' : 'content: "⭕ "'};
    ${props =>
      props.case.case2 === props.name ? 'content: "✅ "' : 'content: "⭕ "'};
    ${props =>
      props.case.case1 === props.name ? 'content: "✅ "' : 'content: "⭕ "'};
  }
`;

const Checklist = ({ badgesWon }) => {
  return (
    <>
      <UL>
        <LI case={badgesWon} name="Troll Hunter">
          Social media Fake News
        </LI>
        <LI case={badgesWon} name="Phish Phood">
          Evading Deception: Phish Phood
        </LI>
        <LI case={badgesWon} name="Password">
          Password ???
        </LI>
      </UL>
    </>
  );
};

export default Checklist;
