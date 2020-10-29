import React from 'react';
import { Button } from './../components/Buttons';
import { useHistory } from 'react-router-dom';
import { H1, H2 } from './../components/Text';
import { Container } from './../components/Forms';
import { ThemeProvider } from 'styled-components';
import { ratingPageTheme } from './../components/themes';
import RatingBar from '../components/RatingBar.js';
import { Avatar } from '../components/Image';
import { sendSkills } from '../api/api';

const Profile = ({ theme, setTheme, agent }) => {
  const [ratingValue, updateRatingValue] = React.useState({
    Facebook: 0,
    Whatsapp: 0,
    Twitter: 0,
    Instagram: 0,
    Snapchat: 0,
    TikTok: 0,
    Youtube: 0
  });

  setTheme('dark-theme');

  const history = useHistory();
  const createProfile = () => {
    sendSkills(ratingValue).then(console.log);
    history.push('/first-case-intro');
  };

  return (
    <Container>
      <ThemeProvider theme={ratingPageTheme}>
        <H1>Hello {agent}!</H1>
        <Avatar className="avatar" />
        <H2>HOW OFTEN DO YOU USE THESE APPS?</H2>
        <RatingBar
          ratingValue={ratingValue}
          updateRatingValue={updateRatingValue}
        />
        <Button onClick={createProfile}>START YOUR FIRST TASK</Button>
      </ThemeProvider>
    </Container>
  );
};

export default Profile;
