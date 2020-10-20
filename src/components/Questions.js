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
