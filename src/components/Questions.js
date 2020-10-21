import React from 'react';
import { H1, Text } from './Text';
import { Img } from './Image';

export const ImageQuestion = ({ title, img, question }) => {
  return (
    <>
      <H1>{title}</H1>
      <Img src={img} />
      <Text>{question}</Text>
    </>
  );
};

//timed question
//progress bar of time ticking down
//multiple choice options to add to password- numbers, captial letters, punctuation, their alias,
//cat, dog, bird
//adding something that makes your password stronger gives 2 points
//adding something that makes it weaker takes points away
//if points is high when timer runs out, you win badge
//if low, try again

export const TimedQuestion = ({}) => {
  return <></>;
};
