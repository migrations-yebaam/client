import React, { useState } from 'react';
import '../scss/CreateAccountButton.scss';
import RegisterModal from '../../auth/components/Register';

const CreateAccountButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className="create-account-button" onClick={handleOpenModal}>
        Crear cuenta nueva
      </button>
      {showModal && <RegisterModal onClose={handleCloseModal} />}
    </>
  );
};

export default CreateAccountButton;
