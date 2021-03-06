import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import "./ProfileButton.css";

const ProfileButton = ({ user }) => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [showMenu]);

  const openMenu = () => {
    if (showMenu) return;

    setShowMenu(true);
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={openMenu} className="nav__toggle">
        <i class="fas fa-id-badge fa-2x"></i>
      </button>

      {showMenu && (
        <>
          <ul className="nav__list">
            <li className="nav__list-ele">{user.username}</li>
            <li className="nav__list-ele">{user.email}</li>
            <li className="nav__list-ele">
              <button className="nav__list-ele-button" onClick={logout}>
                Log Out
              </button>
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default ProfileButton;
