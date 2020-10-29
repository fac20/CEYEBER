import styled from 'styled-components';
import React from 'react';

export const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const Avatar = styled.div``;

export const Globe = styled.div``;

export const BadgeImage = styled.div`
  ${props =>
    props.size === 'small'
      ? 'width: 75px; height: 75px; margin-left: auto; margin-right: auto'
      : ''}
`;

export const BadgeContainer = styled.div`
  border: ${props => (props.size === 'small' ? '1px' : '5px')} solid;
  padding: ${props => (props.size === 'small' ? '0.7rem' : '2rem')};
  border-radius: ${props => (props.size === 'small' ? '25px' : '50px')};
  border-color: ${props => props.theme.borderColor};
  margin: 0.5rem;
`;

export const BadgeTitle = styled.h2`
  color: ${props =>
    props.badgeType === null
      ? props.theme.badgeGreyColor
      : props.theme.badgeTextColor};
  font-family: var(--title-font);
  ${props => (props.size === 'small' ? 'font-size: 70%' : '')};
  margin-top: 0;
`;

export const Badge = ({ badgeType, size }) => {
  return (
    <BadgeContainer size={size}>
      <BadgeTitle badgeType={badgeType} size={size}>
        {badgeType !== null ? badgeType : 'Earn a badge'}
      </BadgeTitle>
      <BadgeImage
        className={badgeType !== null ? 'badge' : 'greyBadge'}
        size={size}
      />
    </BadgeContainer>
  );
};
