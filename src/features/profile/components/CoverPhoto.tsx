/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { ChangeCoverPhotoModal } from './modals/ChangeCoverPhotoModal';
import { UserModel } from '../../auth';

type CoverPhoto = {
  currentUser: UserModel;
};

const CoverPhoto: React.FC<CoverPhoto>= ({currentUser}) => {
  const [showCoverModal, setShowCoverModal] = useState(false);

  const handleCoverSave = (image: File | null) => {
    // Lógica para guardar la nueva imagen de portada
    setShowCoverModal(false);
  };

  const handleOpenModal = () => {
    setShowCoverModal(true);
  };

  return (
    <div className="position-relative">
      <img
        src={currentUser.pic}  // Aquí debes poner el link a la foto de portada real. falta portada
        alt="Cover"
        className="img-fluid w-100"
        style={{ height: '300px', objectFit: 'cover', cursor: 'pointer' }}  // Agrega el cursor pointer
        onClick={handleOpenModal} // Abre el modal al hacer clic en la imagen
      />
      <button
        className="btn btn-light position-absolute bottom-0 end-0 m-3"
        style={{ cursor: 'pointer' }}
        onClick={handleOpenModal} // Abre el modal al hacer clic en el botón
      >
        <i className="bi bi-camera-fill me-2"></i> Editar foto de portada
      </button>

      {showCoverModal && (
        <ChangeCoverPhotoModal
          show={showCoverModal}
          onClose={() => setShowCoverModal(false)}
          onSave={handleCoverSave}
        />
      )}
    </div>
  );
};

export { CoverPhoto };
