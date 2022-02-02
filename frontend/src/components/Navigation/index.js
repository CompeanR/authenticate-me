import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <nav>
      {sessionUser ? (
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/">Logout</Link>
          </li>
          <li>
            <Link to="/signup">signup</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">signup</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
