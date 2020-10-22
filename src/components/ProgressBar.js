import styled from 'styled-components';

export const Progress = styled.progress`
  border: 2px solid;
  border-color: ${props => props.theme.pBarColor};
  border-radius: 2px;
  ::-webkit-progress-bar {
    background-color: ${props => props.theme.pBarBgColor};
  }
  ::-webkit-progress-value {
    background-color: ${props => props.theme.pBarValueColor};
  }
`;
