import styled from 'styled-components';
import React from 'react';
import { Button } from './Buttons';
import { H1, Text } from './Text';
import { Img } from './Image';

export const ImageQuestion = ({ title, img, question, answers }) => {
  //styled h1
  //image
  //question paragraph
  //3 buttons

  return (
    <>
      <H1>{title}</H1>
      <Img src={img} />
      <Text>{question}</Text>
    </>
  );
};
