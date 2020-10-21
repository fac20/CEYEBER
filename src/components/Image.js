import styled from 'styled-components';
import React from 'react';

export const Img = styled.img`
  width: 80vw;
  height: 60vh;
  border: solid red 3px;
`;

const BadgeImage = styled.div``;

const BadgeContainer = styled.div`
  border: 5px solid;
  padding: 2rem;
  border-radius: 50px;
  border-color: ${props => props.theme.borderColor};
`;

const BadgeTitle = styled.h2`
  color: ${props => props.theme.badgeTextColor};
  font-family: var(--title-font);
  margin-top: 0;
`;

export const Badge = ({ badgeType }) => {
  return (
    <BadgeContainer>
      <BadgeTitle>{badgeType}</BadgeTitle>
      <BadgeImage className="badge" />
    </BadgeContainer>
  );
};
