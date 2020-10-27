import styled from 'styled-components';
import React, { useState } from 'react';
import { Label } from './Forms';
//import fbIcon from '../images/facebook.svg';
import { Avatar } from '../components/Image';

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

// facebook
// whatsapp
// twitter
// insta
// snapchat
// tiktok
// youtube

//label for each with icon

//each rating should produce a label underneath with a p tag explaining what they have chosen

//make each bar start at 0

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

  const isStarSelected = event => {
    const name = event.target.name;
    console.log(name);
    const value = event.target.value;
    console.log(value);
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
        {/* <p>{ratingValue.Facebook}</p> */}
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
      </DivContainer>
    </>
  );
};

export default RatingBar;
