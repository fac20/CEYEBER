import styled from 'styled-components';
import React, { useState } from 'react';
import { Label } from './Forms';
//import fbIcon from '../images/facebook.svg';
import { Text } from './Text';

const StarRating = styled.div`
  border-style: solid;
  border-color: ${props => props.theme.selected};
  border-radius: 5px;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  min-width: 100px;
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
  align-items: center;
  margin: 1rem;
  @media only screen and (min-width: 700px) {
    width: 450px;
    margin: auto;
    padding: 0.5rem;
  }
  @media only screen and (max-width: 460px) {
    margin: 0.5rem;
  }
`;

const SmallDivContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  @media only screen and (min-width: 700px) {
    width: 150px;
    margin: auto;
    padding: 0.5rem;
  }
  @media only screen and (max-width: 460px) {
    margin: 0.5rem;
  }
`;

const RatingBar = () => {
  //const fbIconSrc = fbIcon;

  const [ratingValue, updateRatingValue] = useState({
    Facebook: 0,
    Whatsapp: 0,
    Twitter: 0,
    Instagram: 0,
    Snapchat: 0,
    TikTok: 0,
    Youtube: 0
  });

  const skills = {
    0: 'Never used it!',
    1: 'Once a week',
    2: 'Up to three times a week',
    3: 'Every day, up to an hour',
    4: 'More than an hour a day'
  };

  const isStarSelected = event => {
    const name = event.target.name;
    //console.log(name);
    const value = event.target.value;
    //console.log(value);
    updateRatingValue({ ...ratingValue, [name]: value });
  };
  let ratingArray = [...Array(5).keys()];

  return (
    <>
      <DivContainer>
        <Label htmlfor="Facebook">Facebook</Label>
        {/* <img src={fbIconSrc} alt="Facebook logo" /> */}
        <StarRating>
          {ratingArray.map(val => {
            return (
              <StarIcon
                key={`star ${val}`}
                onClick={isStarSelected}
                id="Facebook"
                name="Facebook"
                value={val}
                ratingValue={ratingValue.Facebook}
              />
            );
          })}
        </StarRating>
        <SmallDivContainer>
          <Text>{skills[ratingValue.Facebook]}</Text>
        </SmallDivContainer>
      </DivContainer>
      <DivContainer>
        <Label htmlfor="Whatsapp">Whatsapp</Label>
        <StarRating>
          {ratingArray.map(val => {
            return (
              <StarIcon
                key={`star ${val}`}
                onClick={isStarSelected}
                name="Whatsapp"
                id="Whatsapp"
                value={val}
                ratingValue={ratingValue.Whatsapp}
              />
            );
          })}
        </StarRating>
        <Text>{skills[ratingValue.Whatsapp]}</Text>
      </DivContainer>
      <DivContainer>
        <Label htmlfor="Twitter">Twitter</Label>
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
          <Text>{skills[ratingValue.Twitter]}</Text>
        </SmallDivContainer>
      </DivContainer>
      <DivContainer>
        <Label htmlfor="Instagram">Instagram</Label>
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
          <Text>{skills[ratingValue.Instagram]}</Text>
        </SmallDivContainer>
      </DivContainer>
      <DivContainer>
        <Label htmlfor="Snapchat">Snapchat</Label>
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
          <Text>{skills[ratingValue.Snapchat]}</Text>
        </SmallDivContainer>
      </DivContainer>
      <DivContainer>
        <Label htmlfor="TikTok">TikTok</Label>
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
          <Text>{skills[ratingValue.TikTok]}</Text>
        </SmallDivContainer>
      </DivContainer>
      <DivContainer>
        <Label htmlfor="Youtube">Youtube</Label>
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
          <Text>{skills[ratingValue.Youtube]}</Text>
        </SmallDivContainer>
      </DivContainer>
    </>
  );
};

export default RatingBar;
