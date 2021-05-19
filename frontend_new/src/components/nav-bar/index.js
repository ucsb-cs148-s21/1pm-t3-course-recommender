import React from 'react';
import AuthNav from './AuthNav';
import {
  Nav,
  NavLink,
  NavBtn,
  NavBtnLink
} from './elements';
// import logo from '../../img/ucsb.svg';
import logo from '../../img/ucsb-logo.svg';


const NavBar = () => {
  return (
    <>
      <Nav>
      <NavLink to='/'><img src = {logo} class="ucsb-img" /></NavLink>
        <NavLink to='/Survey'activeStyle> Survey </NavLink>
        <NavLink to='/Input' activeStyle> Course List </NavLink>
        <NavLink to='/Result' activeStyle> Recommended Courses </NavLink>
        <AuthNav />
      </Nav>
    </>
  );
};

export default NavBar;
