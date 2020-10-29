import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1rem;
  font-weight: bold;
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  font-family: var(--title-font);
  border-style: none;
  color: ${props => props.theme.btnTextColor};
  background-color: ${props => props.theme.btnColor};
  transition: all 0.2s ease-in-out;
  :hover:not([disabled]) {
    color: ${props => props.theme.btnColor};
    background-color: ${props => props.theme.btnTextColor};
    border-color: ${props => props.theme.btnColor};
    border-style: solid;
    transform: scale(1.1);
  }
  :disabled {
    color: ${props => props.theme.pBarBgColor};
    background-color: ${props => props.theme.pBarValueColor};
  }
`;

export const SubmitButton = styled.button`
  display: block;
  font-size: 1rem;
  font-weight: bold;

  margin: 3rem auto 0 auto;
  padding: 1rem;
  border-radius: 0.5rem;
  font-family: var(--title-font);
  border-style: none;
  color: ${props => props.theme.submitBtnTextColor};
  background-color: ${props => props.theme.submitBtnColor};
  :hover {
    color: ${props => props.theme.submitBtnColor};
    background-color: ${props => props.theme.submitBtnTextColor};
    border-color: ${props => props.theme.submitBtnColor};
    border-style: solid;
  }
`;
