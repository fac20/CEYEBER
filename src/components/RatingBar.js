import styled from 'styled-components';
import React, { useState } from 'react';
import { Label } from './Forms';

const StarRating = styled.div`
  border-style: solid;
  border-color: ${props => props.theme.selected};
  border-radius: 5px;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  width: 50%;
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
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`;

const RatingBar = () => {
  const [ratingValue, updateRatingValue] = useState({ phishing: 0, scams: 0 });
  console.log(ratingValue);
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
        <Label htmlfor="phishing">Phishing</Label>
        <StarRating>
          {ratingArray.map(val => {
            return (
              <StarIcon
                key={`star ${val}`}
                onClick={isStarSelected}
                id="phishing"
                name="phishing"
                value={val}
                ratingValue={ratingValue.phishing}
              />
            );
          })}
        </StarRating>
      </DivContainer>
      <DivContainer>
        <Label htmlfor="scams">Scams</Label>
        <StarRating>
          {ratingArray.map(val => {
            return (
              <StarIcon
                key={`star ${val}`}
                onClick={isStarSelected}
                name="scams"
                id="scams"
                value={val}
                ratingValue={ratingValue.scams}
              />
            );
          })}
        </StarRating>
      </DivContainer>
    </>
  );
};

export default RatingBar;
