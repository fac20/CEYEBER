import styled from 'styled-components';
import React from 'react';

export const H1 = styled.h1`
  color: var(--color-5);
  font-family: var(--title-font);
  text-align: center;
`;
const MainTitle = styled.span`
  font-size: 5rem;
  color: var(--color-1);
  font-family: var(--title-font);
  display: block;
`;

export const Title = () => {
  return (
    <H1>
      Learn to protect yourself from cyber threats with{' '}
      <MainTitle>CEYEBER </MainTitle>Digital Agency
    </H1>
  );
};
