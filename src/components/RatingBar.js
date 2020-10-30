import styled from 'styled-components';
import React from 'react';
import { Label } from './Forms';
import { FixedWidthText } from './Text';

const StarRating = styled.div`
  border-style: solid;
  border-color: ${props => props.theme.selected};
  border-radius: 5px;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  min-width: 150px;
  max-width: 200px;
  justify-content: space-between;
`;

const StarIcon = styled.button`
  cursor: pointer;
  width: 1rem;
  height: 2rem;
  border-style: none;
  border-radius: 5px;
  background-color: ${props =>
    props.value <= props.ratingValue
      ? props.theme.selected
      : props.theme.ratingBarColor};
`;

const DivContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: end;
  margin: 1rem;
  /* @media only screen and (min-width: 700px) {
    width: 450px;
    margin: auto;
    padding: 0.5rem;
  } */
  @media only screen and (max-width: 460px) {
    margin: 0.5rem;
    flex-direction: column;
    align-items: center;
  }
`;

const SmallDivContainer = styled.div`
  /* margin: auto;
  @media only screen and (min-width: 700px) {
    width: 150px;
    margin: auto;
    padding: 0.5rem;
  }
  @media only screen and (max-width: 460px) {
    margin: 0.5rem;
  } */
`;

const RatingBar = ({ ratingValue, updateRatingValue }) => {
  const skills = {
    0: 'Never used it!',
    1: 'Once a week',
    2: 'Up to three times a week',
    3: 'Every day, up to an hour',
    4: 'More than an hour a day'
  };

  const isStarSelected = event => {
    const name = event.target.name;
    const value = event.target.value;
    updateRatingValue({ ...ratingValue, [name]: value });
  };
  let ratingArray = [...Array(5).keys()];

  return (
    <>
      <DivContainer>
        <Label width="150px" htmlfor="Facebook">
          Facebook
        </Label>
        <StarRating>
          {ratingArray.map(val => {
            return (
              <StarIcon
                key={`star ${val}`}
                onClick={isStarSelected}
                id={`Facebook${val}`}
                name="Facebook"
                value={val}
                ratingValue={ratingValue.Facebook}
              />
            );
          })}
        </StarRating>
        <SmallDivContainer>
          <FixedWidthText width="150px">
            {skills[ratingValue.Facebook]}
          </FixedWidthText>
        </SmallDivContainer>
      </DivContainer>
      <DivContainer>
        <Label width="150px" htmlfor="Whatsapp">
          Whatsapp
        </Label>
        <StarRating>
          {ratingArray.map(val => {
            return (
              <StarIcon
                key={`star ${val}`}
                onClick={isStarSelected}
                name="Whatsapp"
                id={`Whatsapp${val}`}
                value={val}
                ratingValue={ratingValue.Whatsapp}
              />
            );
          })}
        </StarRating>
        <FixedWidthText>{skills[ratingValue.Whatsapp]}</FixedWidthText>
      </DivContainer>
      <DivContainer>
        <Label width="150px" htmlfor="Twitter">
          Twitter
        </Label>
        <StarRating>
          {ratingArray.map(val => {
            return (
              <StarIcon
                key={`star ${val}`}
                onClick={isStarSelected}
                name="Twitter"
                id="Twitter"
                value={val}
                ratingValue={ratingValue.Twitter}
              />
            );
          })}
        </StarRating>
        <SmallDivContainer>
          <FixedWidthText>{skills[ratingValue.Twitter]}</FixedWidthText>
        </SmallDivContainer>
      </DivContainer>
      <DivContainer>
        <Label width="150px" htmlfor="Instagram">
          Instagram
        </Label>
        <StarRating>
          {ratingArray.map(val => {
            return (
              <StarIcon
                key={`star ${val}`}
                onClick={isStarSelected}
                name="Instagram"
                id="Instagram"
                value={val}
                ratingValue={ratingValue.Instagram}
              />
            );
          })}
        </StarRating>
        <SmallDivContainer>
          <FixedWidthText>{skills[ratingValue.Instagram]}</FixedWidthText>
        </SmallDivContainer>
      </DivContainer>
      <DivContainer>
        <Label width="150px" htmlfor="Snapchat">
          Snapchat
        </Label>
        <StarRating>
          {ratingArray.map(val => {
            return (
              <StarIcon
                key={`star ${val}`}
                onClick={isStarSelected}
                name="Snapchat"
                id="Snapchat"
                value={val}
                ratingValue={ratingValue.Snapchat}
              />
            );
          })}
        </StarRating>
        <SmallDivContainer>
          <FixedWidthText>{skills[ratingValue.Snapchat]}</FixedWidthText>
        </SmallDivContainer>
      </DivContainer>
      <DivContainer>
        <Label width="150px" htmlfor="TikTok">
          TikTok
        </Label>
        <StarRating>
          {ratingArray.map(val => {
            return (
              <StarIcon
                key={`star ${val}`}
                onClick={isStarSelected}
                name="TikTok"
                id="TikTok"
                value={val}
                ratingValue={ratingValue.TikTok}
              />
            );
          })}
        </StarRating>
        <SmallDivContainer>
          <FixedWidthText>{skills[ratingValue.TikTok]}</FixedWidthText>
        </SmallDivContainer>
      </DivContainer>
      <DivContainer>
        <Label width="150px" htmlfor="Youtube">
          Youtube
        </Label>
        <StarRating>
          {ratingArray.map(val => {
            return (
              <StarIcon
                key={`star ${val}`}
                onClick={isStarSelected}
                name="Youtube"
                id="Youtube"
                value={val}
                ratingValue={ratingValue.Youtube}
              />
            );
          })}
        </StarRating>
        <SmallDivContainer>
          <FixedWidthText>{skills[ratingValue.Youtube]}</FixedWidthText>
        </SmallDivContainer>
      </DivContainer>
    </>
  );
};

export default RatingBar;
