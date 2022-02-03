import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

const Navigation = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <nav>
      {sessionUser ? (
        <>
          <ProfileButton user={sessionUser} />
        </>
      ) : (
        <ul>
          <li>
            <NavLink exact to="/">
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">signup</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
