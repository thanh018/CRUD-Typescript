import styled from 'styled-components';

export const StyledSideBar = styled.ul`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 200px;
  top: 0;
  left: 0;
  border-right: 1px solid rgb(220, 224, 233);
  background-color: #dadada;
  font-weight: bold;
  padding: 50px 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  list-style-type: none;
  justify-content: left;

  .name-app {
    text-transform: uppercase;
    color: #329252;
    font-size: 20px;
  }

  li {
    margin-bottom: 15px;
  }

  a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
    transition: color 0.2s ease;
    &:hover {
      color: #329252;
    }
    &.active {
      color: #329252;
    }
  }
`;