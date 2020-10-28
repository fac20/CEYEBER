import React from 'react';
import { Button } from './../components/Buttons';
import { useHistory } from 'react-router-dom';
import { H1, H2 } from './../components/Text';
import { Container } from './../components/Forms';
import { ThemeProvider } from 'styled-components';
import { ratingPageTheme } from './../components/themes';
import RatingBar from '../components/RatingBar.js';
import { Avatar } from '../components/Image';

const Profile = ({ theme, setTheme, alias }) => {
  setTheme('dark-theme');

  const history = useHistory();
  const createProfile = () => {
    history.push('/first-case-intro');
  };

  return (
    <Container>
      <ThemeProvider theme={ratingPageTheme}>
        <H1>Hello {alias}!</H1>
        <Avatar className="avatar" />
        <H2>HOW OFTEN DO YOU USE THESE APPS?</H2>
        <RatingBar />
        <Button onClick={createProfile}>START YOUR FIRST TASK</Button>
      </ThemeProvider>
    </Container>
  );
};

export default Profile;
