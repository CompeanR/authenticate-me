import LoginForm from "./LoginForm";
import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import "./LoginFormModal.css";

const LoginFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="nav__modal-button" onClick={() => setShowModal(true)}>
        Log In <i class="fas fa-sign-in-alt"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
};

export default LoginFormModal;
