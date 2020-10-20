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
  const createProfile = () => {};

  const Div = styled.div`
    padding-top: 3rem;
  `;

  return (
    <Container>
      <ThemeProvider theme={landingPageTheme}>
        <Div>
          <Title>Hello Brown Fox!</Title>
        </Div>
        <div className="avatar" />
        <H1>RATE YOUR SKILLS!</H1>
        <Button onClick={createProfile}>START YOUR FIRST</Button>
      </ThemeProvider>
    </Container>
  );
};

export default Profile;
