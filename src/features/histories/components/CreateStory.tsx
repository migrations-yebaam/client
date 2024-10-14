import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useAppSelector } from '../../../store/store';
import { IReduxState } from '../../../store/store.interface';
import CreatePhotoStoryModal from '../modals/CreatePhotoStoryModal';
import TextStoryModal from '../modals/TextStoryModal';
import '../scss/CreateStory.scss'
const CreateStory: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTextStoryModalOpen, setIsTextStoryModalOpen] = useState(false);  // Estado para el modal de texto
  const [isPhotoStoryModalOpen, setIsPhotoStoryModalOpen] = useState(false);  // Estado para el modal de foto
  const authUser = useAppSelector((state: IReduxState) => state.authUser);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openTextStoryModal = () => {
    closeModal();  
    setIsTextStoryModalOpen(true);  
  };

  const closeTextStoryModal = () => setIsTextStoryModalOpen(false);

  const openPhotoStoryModal = () => {
    closeModal();  
    setIsPhotoStoryModalOpen(true);  
  };

  const closePhotoStoryModal = () => setIsPhotoStoryModalOpen(false);

  return (
    <>
      {/* Componente principal para crear historia */}
      <div
        className="create-story d-flex flex-column align-items-center justify-content-center"
        onClick={openModal}
        style={{
          width: '120px',
          height: '220px',
          cursor: 'pointer',
          backgroundColor: '#f0f0f0',
          borderRadius: '10px'
        }}
      >
        <div className="create-story-content position-relative d-flex flex-column align-items-center">
          <img
            src={`${authUser.profilePicture}`}
            alt="Profile"
            className="rounded-circle"
            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
          />
          <Button
            variant="primary"
            className="position-absolute"
            style={{
              bottom: '-15px',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              fontSize: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            +
          </Button>
        </div>
        <div className="create-story-label mt-2 font-weight-bold text-dark">
          Crear historia
        </div>
      </div>

      {/* Modal principal */}
      <Modal show={isModalOpen} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Crear una historia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-around main_modal">
            <div className="text-center" onClick={openPhotoStoryModal}>
              {/* <img
                src="https://images.unsplash.com/photo-1719937206930-84afb0daf141?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Photo"
                style={{ width: '50px', height: '50px' }}
              /> */}
              <p className="mt-2 font-weight-bold">Crear una historia con foto</p>
            </div>
            <div className="text-center" onClick={openTextStoryModal}>
              {/* <img
                src="https://images.unsplash.com/photo-1719937206930-84afb0daf141?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Text"
                style={{ width: '50px', height: '50px' }}
              /> */}
              <p className="mt-2 font-weight-bold">Crear una historia de texto</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Modal para crear historia de texto */}
      <TextStoryModal show={isTextStoryModalOpen} onClose={closeTextStoryModal} />

      {/* Modal para crear historia con foto */}
      <CreatePhotoStoryModal show={isPhotoStoryModalOpen} onClose={closePhotoStoryModal} />
    </>
  );
};

export default CreateStory;
