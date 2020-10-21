import React from 'react';
import { Button } from './../components/Buttons';
import { useHistory } from 'react-router-dom';
import { H1, H2 } from './../components/Text';
import { Container } from './../components/Forms';
import { ThemeProvider } from 'styled-components';
import { ratingPageTheme } from './../components/themes';
import RatingBar from '../components/RatingBar.js';
import { Avatar } from '../components/Image';

const Profile = () => {
  const history = useHistory();
  const createProfile = () => {
    history.push('/first-case-intro');
  };

  return (
    <Container>
      <ThemeProvider theme={ratingPageTheme}>
        <H1>Hello Brown Fox!</H1>
        <Avatar className="avatar" />
        <H2>RATE YOUR SKILLS!</H2>
        <RatingBar />
        <Button onClick={createProfile}>START YOUR FIRST TASK</Button>
      </ThemeProvider>
    </Container>
  );
};

export default Profile;
