import React from 'react';
import { ThemeProvider } from 'styled-components';
import { H1, H2, Text } from './../components/Text';
import { Button } from './../components/Buttons';
import { fieldPageTheme } from './../components/themes';
import { useHistory } from 'react-router-dom';

const TrainingManual = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <ThemeProvider theme={fieldPageTheme}>
      <H1>Training Manual</H1>
      <H2>Phishing</H2>
      <Text>
        This is an attempt by someone to get you to send them personal
        information, such as usernames, passwords, email addresses and bank
        account details
      </Text>
      <H2>Misinformation</H2>
      <Text>
        Inaccurate information or content that is unintentionally or mistakenly
        shared
      </Text>
      <H2>Disinformation</H2>
      <Text>
        False information that is deliberately spread to mislead others
      </Text>
      <H2>Malware</H2>
      <Text>
        Malware is a harmful software programme. Once installed on your computer
        it can wreak havoc and steal your personal details, like credit card
        information
      </Text>
      <Button onClick={goBack}>Back to Case</Button>
    </ThemeProvider>
  );
};

export default TrainingManual;
