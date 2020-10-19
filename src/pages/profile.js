import React from 'react';
import styled from 'styled-components';
import { Button } from './../components/Buttons';
import { useHistory } from 'react-router-dom';
import { H1 } from './../components/Text';
import { Container } from './../components/Forms';
import { ThemeProvider } from 'styled-components';
import { landingPageTheme } from './../components/themes';

const Title = styled(H1)`
  color: var(--color-2);
  font-size: 3rem;
`;

const Profile = () => {
  const history = useHistory();
  const createPorfile = () => {};

  return (
    <Container>
      <ThemeProvider theme={landingPageTheme}>
        <Title>Hello Brown Fox!</Title>
        <div className="avatar" />
        <H1>RATE YOUR SKILLS!</H1>
        <Button onClick={createPorfile}>START YOUR FIRST</Button>
      </ThemeProvider>
    </Container>
  );
};

export default Profile;