import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { NavLink } from './elements';

const AuthNav = () => {
  const { user } = useAuth0();
  if(user) {
    const { name } = user;
    return <>
      <LogoutButton />
    </>
  } else {
    return <LoginButton/>
  }
};

export default AuthNav;