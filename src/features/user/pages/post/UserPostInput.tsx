import React, { useState } from 'react';
import { CreateUserPostModal } from '../../modals/CreateUserPostModal';

export const UserPostInput: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="post-input mb-4 p-3 bg-light rounded">
        <textarea
          className="form-control mb-2"
          placeholder="¿vamos, escribele algo a tu amigo?"
          rows={3}
          onClick={() => setShowModal(true)}  
        ></textarea>
        <div className="d-flex justify-content-between">
          <div>
            <button className="btn btn-light"><i className="bi bi-camera-video-fill me-2"></i>Video en vivo</button>
            <button className="btn btn-light ms-2"><i className="bi bi-image-fill me-2"></i>Foto/video</button>
          </div>
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>Publicar</button>
        </div>
      </div>

      <CreateUserPostModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};
