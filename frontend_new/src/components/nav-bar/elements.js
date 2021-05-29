import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #18335d;
  height: 5em;
  display: flex;
  flex-direction: row
  justify-content: space-evenly;
  min-width: 1100px
  text-decoration: none;
`;

export const NavLink = styled(Link)`
  color: #ffce34;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem 2rem;
  height: 100%;
  min-width: fit-content;
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
  min-width: fit-content;
  text-decoration: none;

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
  text-decoration: none;
  min-width: fit-content;
  &:hover {
    background: #fff;
    color: #000;
    text-decoration:none;
  }
`;

export const BtnLink = styled(Link)`
  border-radius: 5px;
  background: #203354;
  padding: 10px 20px;
  color: #ffce34;
  font-weight: bold;
  // cursor: pointer;
  // transition: all 0.2s ease-in-out;
  text-decoration: none;
  min-width: fit-content;
  &:hover {
    background: #fff;
    color: #000;
    text-decoration:none;
  }
`;


export const SubmitBtn = styled.div`
  border-radius: 5px;
  background: #203354;
  color: #ffce34;
  cursor: pointer;
  text-decoration: none;
  min-width: fit-content;
  max-width: 125px;
  justify-content: center;
`;