import React from 'react';
import {
  NavLink
} from 'react-router-dom';
import { StyledSideBar } from './styled';

function SideBar() {
  return (
    <StyledSideBar>
      <li className="name-app">HOMEWORK</li>
      <li>
        <NavLink exact to="/">Counter</NavLink>
      </li>
      <li>
        <NavLink to="/employee-management">Employee</NavLink>
      </li>
    </StyledSideBar>
  );
}

export default SideBar;
