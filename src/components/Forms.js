import styled from 'styled-components';
import React from 'react';
import { Button } from './../components/Buttons';
import { useHistory } from 'react-router-dom';

const Form = styled.form`
  width: 60%;
  margin: 5vh auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  padding: 3rem;
  text-align: center;
`;

const Fieldset = styled.fieldset`
  color: ${props => props.theme.formColor};
  border-style: solid;
  padding: 0.75rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border-color: ${props => props.theme.formColor};
`;

export const Label = styled.label`
  font-family: var(--info-font);
  font-size: 1.2rem;
  margin-bottom: 1ch;
  color: ${props => props.theme.labelColor};
`;

const Input = styled.input`
  font-family: var(--info-font);
  width: 90%;
  margin: 1ch;
  font-size: 1.2rem;
  padding: 0.2rem;
  color: ${props => props.theme.formColor};
  background: transparent;
  border-radius: 5px;
  text-align: center;
  border-color: ${props => props.theme.formColor};
  scrollbar-arrow-color: ${props => props.theme.formColor};
`;

export const LandingPageForm = () => {
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    history.push('/profile');
    console.log(event.target);
    const alias = event.target.elements.alias.value;
    const age = event.target.elements.age.value;
    const location = event.target.elements.location.value;

    console.log(alias, age, location);
  };

  return (
    <Form onSubmit={event => handleSubmit(event)}>
      <Fieldset>
        <Label htmlFor="alias">Alias:</Label>
        <Input id="alias" type="text" placeholder="BrownFox" required />
        <Label htmlFor="age">Age:</Label>
        <Input id="age" type="number" min="8" placeholder="8" required />
        <Label htmlFor="location">Location:</Label>
        <Input id="location" type="text" placeholder="London" required />
      </Fieldset>
      <Button>CLICK HERE TO BUILD YOUR PROFILE</Button>
    </Form>
  );
};
