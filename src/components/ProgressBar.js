import styled from 'styled-components';

export const Progress = styled.progress`
  border: 2px solid;
  border-color: ${props => props.theme.pBarColor};
  border-radius: 10px;
  margin: auto 1rem;
  padding: 2px;
  background-color: ${props => props.theme.pBarBgColor};
  ::-webkit-progress-bar {
    background-color: ${props => props.theme.pBarBgColor};
    border-radius: 10px;
  }
  ::-webkit-progress-value {
    border-radius: 10px;
    background-color: ${props => props.theme.pBarValueColor};
  }
  ::-moz-progress-bar {
    background-color: ${props => props.theme.pBarValueColor};
    border-radius: 5px;
  }
`;
// under 0 red
//0 14 amber
export const PasswordStrength = styled.progress`
  border: 2px solid;
  border-color: ${props => props.theme.pBarColor};
  border-radius: 10px;
  ::-webkit-progress-bar {
    background-color: ${props => props.theme.pBarBgColor};
  }
  ::-webkit-progress-value {
    background-color: ${props =>
      props.value <= 5
        ? 'var(--color-7)'
        : props.value > 5 && props.value <= 14
        ? 'var(--color-2)'
        : 'var(--color-3)'};
  }
`;