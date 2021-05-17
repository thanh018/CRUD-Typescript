import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerStyled = styled.div`
  position: relative;
  .d-none {
    display: none;
  }
  
  .loading {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.41);
  }
  
  .icon-spinner {
    border: 10px solid #f3f3f3;
    border-radius: 50%;
    border-top: 10px solid #329252;
    width: 30px;
    height: 30px;
    animation: ${spin} 2s linear infinite;
    position: absolute;
    top: 38%;
    left: 48.5%;
    transform: translate(-50%, -50%);
  }
`;


