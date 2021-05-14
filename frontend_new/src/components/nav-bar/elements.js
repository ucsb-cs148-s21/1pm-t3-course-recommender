import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #18335d;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 10px 500px;
`;

export const NavLink = styled(Link)`
  color: #ffce34;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem 2rem;
  height: 100%;
  // cursor: pointer;
  font-size: 18px;

  &.active {
    font-weight: 1000;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 20px;

  // @media screen and (max-width: 768px) {
  //   display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 5px;
  background: #203354;
  padding: 10px 20px;
  color: #ffce34;
  // cursor: pointer;
  // transition: all 0.2s ease-in-out;
  // text-decoration: none;

  &:hover {
    background: #fff;
    color: #000;
    text-decoration:none;
  }
`;
