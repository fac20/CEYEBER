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
  :hover:not([disabled]) {
    color: ${props => props.theme.btnColor};
    background-color: ${props => props.theme.btnTextColor};
    border-color: ${props => props.theme.btnColor};
    border-style: solid;
  }
  :disabled {
    color: ${props => props.theme.pBarBgColor};
    background-color: ${props => props.theme.pBarValueColor};
  }
`;
