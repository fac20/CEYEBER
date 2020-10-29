import styled from 'styled-components';
import React from 'react';
import { Button } from './../components/Buttons';
import { useHistory } from 'react-router-dom';
import { countriesArray } from './countriesArray';
import { signUp } from '../api/api';

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
  margin-top: 1ch;
  color: ${props => props.theme.labelColor};
`;

const Input = styled.input`
  font-family: var(--info-font);
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

const Select = styled.select`
  font-family: var(--info-font);
  margin: 1ch;
  font-size: 1.2rem;
  padding: 0.2rem;
  color: ${props => props.theme.formColor};
  background: transparent;
  border-radius: 5px;
  text-align: center;
  border-color: ${props => props.theme.formColor};
`;

const Option = styled.option`
  background-color: ${props => props.theme.optionColor};
  color: ${props => props.theme.btnTextColor};
`;

const Countries = ({ id }) => {
  const options = countriesArray.map(country => {
    if (country === 'United Kingdom') {
      return (
        <Option key={country} value={country} selected>
          {country}
        </Option>
      );
    } else {
      return (
        <Option key={country} value={country}>
          {country}
        </Option>
      );
    }
  });
  return (
    <Select id={id} name={id}>
      {options}
    </Select>
  );
};

export const LandingPageForm = ({ alias, setAlias }) => {
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    history.push('/profile');
    console.log(event.target.elements);
    const alias = event.target.elements.alias.value;
    const age = event.target.elements.age.value;
    const country = event.target.elements.country.value;
    setAlias(alias);
    console.log('Profile: ', alias, age, country);
    signUp(alias, age, country) //sent the data to the backend and database, your backend will send you the user id
      .then(user => user.id);
  };

  return (
    <Form onSubmit={event => handleSubmit(event)}>
      <Fieldset>
        <Label htmlFor="alias">Alias:</Label>
        <Input
          id="alias"
          type="text"
          placeholder="BrownFox"
          data-cy="alias"
          maxLength="8"
          required
        />
        <Label htmlFor="age">Age:</Label>
        <Input
          id="age"
          type="number"
          min="8"
          max="18"
          placeholder="8"
          required
        />
        <Label htmlFor="country">Location:</Label>
        <Countries id="country" required />
      </Fieldset>
      <Button>CLICK HERE TO BUILD YOUR PROFILE</Button>
    </Form>
  );
};
