import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  margin-top: 5px;
  margin-bottom: 20px;
  padding: 0 15px;
  width: 100%;
  color: rgba(0, 0, 0, 0.87);
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }
`;