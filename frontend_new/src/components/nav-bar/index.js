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
      <Nav className="navbar" style={{ display:'inline-flex', flexDirection:'row',justifyContent:'space-evenly', width:'100%', minWidth:'1030px' }}>
        <NavLink to='/'><img src = {logo} class="ucsb-img" style={{ backgroundColor: '#18335d'}} /></NavLink>
        <NavLink to='/' activeStyle>Home</NavLink>
        <NavLink to='/Survey'activeStyle> Survey </NavLink>
        <NavLink to='/CourseList' activeStyle> Course List </NavLink>
        <NavLink to='/Result' activeStyle> Recommended Courses </NavLink>
        <AuthNav />
      </Nav>
    </>
  );
};

export default NavBar;
