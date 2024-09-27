import React, { useState } from 'react';
import '../scss/AddAccountButton.scss';
import ModalManager from '../modals/ModalManager';

const AddAccountButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className="add-account-button" onClick={handleOpenModal}>
        Agregar cuenta
      </button>
      {showModal && <ModalManager isAddAccount={true} onClose={handleCloseModal} />}
    </>
  );
};

export default AddAccountButton;
