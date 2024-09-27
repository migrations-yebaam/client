import React, { useState } from 'react';
import '../scss/ForgotPasswordLink.scss';
import ForgotPasswordModal from '../modals/ForgotPasswordModal';

const ForgotPasswordLink: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <a
        href="#"
        onClick={handleOpenModal}
        className="forgot-password-link"
      >
        ¿Olvidaste tu contraseña?
      </a>
      
      {isModalOpen && <ForgotPasswordModal onClose={handleCloseModal} />}
    </>
  );
};

export default ForgotPasswordLink;
