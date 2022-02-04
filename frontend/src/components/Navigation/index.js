import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

const Navigation = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <nav className="nav">
      {sessionUser ? (
        <>
          <ProfileButton user={sessionUser} />
        </>
      ) : (
        <ul className="nav__list">
          <li className="nav__list-ele">
            <NavLink exact to="/">
              Homepage
            </NavLink>
          </li>
          <li className="nav__list-ele">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="nav__list-ele">
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
