import React from 'react';
import { H1, H2, Text } from './Text';
import { Img } from './Image';
import { Label } from './Forms';
import { useHistory } from 'react-router-dom';
import { Progress } from './ProgressBar';

export const ImageQuestion = ({ title, img, question }) => {
  return (
    <>
      <H1>{title}</H1>
      <Img src={img} />
      <Text>{question}</Text>
    </>
  );
};

export function TimedQuestion({
  title,
  img,
  question,
  points,
  timeLeft,
  setTimeLeft,
  nextPage,
  taskName
}) {
  const history = useHistory();

  React.useEffect(() => {
    const startInterval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(startInterval);
  }, [timeLeft, setTimeLeft, history, nextPage]);

  return (
    <>
      <H1>{title}</H1>
      <H2>
        {timeLeft} {timeLeft > 1 ? 'Seconds' : 'Second'}
      </H2>
      <Img src={img} />
      <Text>{question}</Text>
    </>
  );
}
