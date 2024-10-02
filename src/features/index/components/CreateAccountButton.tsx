import React, { useState } from 'react';
import '../scss/CreateAccountButton.scss';
import RegisterModal from '../../auth/components/Register';

interface CreateAccountButtonProps {
  className?: string;
}

const CreateAccountButton: React.FC<CreateAccountButtonProps> = ({ className }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className={`create-account-button ${className}`} onClick={handleOpenModal}>
        Crear cuenta nueva
      </button>
      {showModal && <RegisterModal onClose={handleCloseModal} />}
    </>
  );
};

export default CreateAccountButton;
