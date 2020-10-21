import styled from 'styled-components';
import React from 'react';

export const Img = styled.img`
  width: 80vw;
  height: 60vh;
  border: solid red 3px;
`;

export const Avatar = styled.div``;

export const BadgeImage = styled.div``;

export const BadgeContainer = styled.div`
  border: 5px solid;
  padding: 2rem;
  border-radius: 50px;
  border-color: ${props => props.theme.borderColor};
`;

export const BadgeTitle = styled.h2`
  color: ${props =>
    props.badgeType === null
      ? props.theme.badgeGreyColor
      : props.theme.badgeTextColor};
  font-family: var(--title-font);
  margin-top: 0;
`;

export const Badge = ({ badgeType }) => {
  return (
    <BadgeContainer>
      <BadgeTitle badgeType={badgeType}>
        {badgeType !== null ? badgeType : 'Earn a badge'}
      </BadgeTitle>
      <BadgeImage className={badgeType !== null ? 'badge' : 'greyBadge'} />
    </BadgeContainer>
  );
};
