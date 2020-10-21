import styled from 'styled-components';
import React from 'react';

export const H1 = styled.h1`
  color: ${props => props.theme.h1Color};
  font-family: var(--title-font);
  text-align: center;
`;

export const H2 = styled.h2`
  color: ${props => props.theme.textColor};
  font-family: var(--title-font);
`;

export const MainTitle = styled.span`
  font-size: 5rem;
  color: var(--color-1);
  font-family: var(--title-font);
  display: block;
`;

export const Text = styled.p`
  color: ${props => props.theme.textColor};
  font-family: var(--info-font);
`;

export const Title = () => {
  return (
    <H1>
      Learn to protect yourself from cyber threats with{' '}
      <MainTitle>CEYEBER </MainTitle>Digital Agency
    </H1>
  );
};
