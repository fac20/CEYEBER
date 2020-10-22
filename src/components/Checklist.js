import React from 'react';
import styled from 'styled-components';
import { Text } from './Text.js';

const UL = styled.ul`
  align-self: flex-start;
  position: relative;
`;

const LI = styled(Text)`
  text-align: left;
  padding: 12px 8px 12px 40px;

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

const Checklist = ({ cases }) => {
  console.log(cases.case1);
  return (
    <>
      <UL>
        <LI case={cases} name="Troll Hunter">
          Social media Fake News
        </LI>
        <LI case={cases} name="Phish Phood">
          Evading Deception:
          <br />
          Phish Phood
        </LI>
        <LI case={cases} name="Password">
          Password ???
        </LI>
      </UL>
    </>
  );
};

export default Checklist;
