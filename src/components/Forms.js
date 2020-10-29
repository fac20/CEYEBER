import styled from 'styled-components';
import React from 'react';
import { Button } from './../components/Buttons';
import { useHistory } from 'react-router-dom';
import { countriesArray } from './countriesArray';
import { signUp } from './../api/api';

const Form = styled.form`
  /* width: 60%; */
  margin: 5vh auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
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

const ErrorDiv = styled.div`
  font-family: var(--info-font);
  color: ${props => props.theme.errorMessageColor};
  margin-left: 1ch;
  margin-right: 1ch;
`;

const Countries = ({ id }) => {
  const options = countriesArray.map(country => {
      return (
        <Option key={country} value={country}>
          {country}
        </Option>
      );
  });
  return (
    <Select id={id} name={id} defaultValue="United Kingdom">
      {options}
    </Select>
  );
};

export const LandingPageForm = ({ agent, setAgent }) => {
  const history = useHistory();

  const [errorMessage, setErrorMessage] = React.useState('');
  const handleSubmit = event => {
    event.preventDefault();
    const agent = event.target.elements.agent.value;
    const age = event.target.elements.age.value;
    const country = event.target.elements.country.value;
    signUp(agent, age, country)
    .then(res => {
      if (res.id){
        window.sessionStorage.setItem('user_id', res.id)
        setAgent(agent);
        history.push('/profile');
      } else {
        //ask to pick another
        console.log(res.message)
        setErrorMessage(res.message); 
      }   
    })
    //.then(id => window.sessionStorage.setItem('user_id', id))
    .catch(error=> console.log(error))
  };

  return (
    <Form autoComplete="off" onSubmit={event => handleSubmit(event)}>
      <Fieldset>
        <Label htmlFor="agent">Agent:</Label>
        <Input
          id="agent"
          type="text"
          placeholder="BrownFox"
          data-cy="agent"
          maxLength="8"
          required
        />
        <ErrorDiv>{errorMessage}</ErrorDiv>
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
