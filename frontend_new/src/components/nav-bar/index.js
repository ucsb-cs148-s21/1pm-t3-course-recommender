import React from 'react';
import {
  Nav,
  NavLink,
  NavBtn,
  NavBtnLink
} from './elements';

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/Survey'activeStyle> Home </NavLink>
          <NavLink to='/Input' activeStyle> Course List </NavLink>
          <NavLink to='/Result' activeStyle> Recommended Course </NavLink>
        <NavBtn> <NavBtnLink to='/SignIn'>Sign In</NavBtnLink> </NavBtn>
      </Nav>
    </>
  );
};

export default NavBar;
