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
  font-size: 3.8rem;
  color: var(--color-1);
  font-family: var(--title-font);
  display: block;
`;

export const Text = styled.p`
  color: ${props => props.theme.textColor};
  font-family: var(--info-font);
`;

export const FixedWidthText = styled.p`
  width: 150px;
  height: 3ch;
  color: ${props => props.theme.textColor};
  font-family: var(--info-font);
`;

export const SpeechBubbleText = styled.p`
  color: ${props => props.theme.textColor};
  font-family: var(--info-font);
  width: 70%;
`;

export const PasswordText = styled.p`
  color: ${props => props.theme.textColor};
  font-family: var(--info-font);
  border: 2px solid;
  border-radius: 2px;
  border-color: ${props => props.theme.textColor};
  width: 60%;
  margin: 1rem auto;
  height: 2ch;
  @media only screen and (max-width: 460px) {
    width: 100%;
  }
`;

export const Title = () => {
  return (
    <H1>
      Learn to protect yourself from cyber threats with{' '}
      <MainTitle>CEYEBER </MainTitle>Digital Agency
    </H1>
  );
};
