import styled from 'styled-components';

export const StyledErrorMessage = styled.p`
  font-size: 13px;
  margin: 5px;
  color: #ff4d4f;
  font-weight: 500;
  &&::first-letter {
    text-transform: uppercase;
  }
`;