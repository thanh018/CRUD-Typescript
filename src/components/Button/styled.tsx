import styled from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 5px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  background-color: #ddd;
  color: #121212ab;
  height: 30px;
  min-width: 100px;
  transition: all 0.2s ease;
  text-align: center;

  &:hover {
    background-color: #b3afaf;
  }

  &.small {
    min-width: 70px;
    font-size: 13px;
    height: 25px;
  }

  &.primary {
    background-color: #329252;
    color: #fff;
    &:hover {
      background-color: #2a7744;
    }
  }

  &.secondary {
    background-color: #1890ff;
    color: #fff;
    &:hover {
      background-color: #2683da;
    }
  }

  &.danger {
    background-color: #ff4d4f;
    color: #fff;
    &:hover {
      background-color: #da3b3d;
    }
  }
`;