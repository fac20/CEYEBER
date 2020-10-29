import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 1rem 1rem;
  @media only screen and (min-width: 700px) {
    max-width: 800px;
    margin: auto;
  }
  @media only screen and (max-width: 460px) {
    width: 100%;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
