import styled from "styled-components";
import React from "react";

const H1 = styled.h1`
  color: var(color-5);
`;
const MainTitle = styled.span`
  color: var(--color-1);
`;

export const Title = () => {
  return (
    <H1>
      Learn to protect yourself from... <MainTitle>CEYEBER</MainTitle>Digital
      Agency
    </H1>
  );
};
