import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import GifSelector from './GifSelector'; 
import MediaUploader from './MediaUploader'; 
import FeelingSelector from './FeelingSelector'; // Importar el nuevo componente
import { useAppSelector } from '../../../store/store';
import { IReduxState } from '../../../store/store.interface';

interface PostModalProps {
  show: boolean;
  onHide: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ show, onHide }) => {
  const authUser = useAppSelector((state: IReduxState) => state.authUser);

  const [addingMedia, setAddingMedia] = useState(false);
  const [showGifSelector, setShowGifSelector] = useState(false);
  const [showFeelingSelector, setShowFeelingSelector] = useState(false); 
  const [selectedGif, setSelectedGif] = useState<string | null>(null);

  const handleGifSelect = (gifUrl: string) => {
    setSelectedGif(gifUrl);
    setShowGifSelector(false);
  };

  const handleFeelingSelect = (feeling: string) => {
    setShowFeelingSelector(false);
  };

  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>Crear publicación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center mb-3">
            <img 
              src={authUser.profilePicture || ''} 
              alt="Profile" 
              className="rounded-circle" 
              style={{ width: '40px', height: '40px', objectFit: 'cover' }} 
            />
            <div className="ml-3">
              <strong>{authUser.username}</strong>
              <Button 
                variant="light" 
                className="d-block mt-1" 
                style={{ fontSize: '14px', padding: '3px 10px' }} 
              >
                <i className="fas fa-globe mr-1"></i> Público
                {/* <i className="fas fa-globe mr-1"></i> Solo amigos
                <i className="fas fa-globe mr-1"></i> Privado */}
              </Button>
            </div>
          </div>
          <textarea
            className="form-control mb-3"
            placeholder={`¿Qué estás pensando, ${authUser.username}?`}
            rows={3}
            style={{ fontSize: '18px', resize: 'none', border: 'none', outline: 'none' }}
          ></textarea>

          {selectedGif && (
            <div className="selected-gif mb-3">
              <img src={selectedGif} alt="Selected GIF" className="img-fluid" />
            </div>
          )}

          {addingMedia && (
            <MediaUploader onClose={() => setAddingMedia(false)} />
          )}

          <div className="d-flex justify-content-between mb-3 flex-wrap">
            <Button 
              variant="light" 
              className="flex-grow-1 mr-2 mb-2 d-flex align-items-center justify-content-center" 
              onClick={() => setAddingMedia(true)}
            >
              <i className="fas fa-photo-video mr-1"></i> Foto/video
            </Button>
            <Button 
              variant="light" 
              className="flex-grow-1 mr-2 mb-2 d-flex align-items-center justify-content-center"
            >
              <i className="fas fa-user-friends mr-1"></i> Etiquetar amigos
            </Button>
            <Button 
              variant="light" 
              className="flex-grow-1 mr-2 mb-2 d-flex align-items-center justify-content-center"
              onClick={() => setShowFeelingSelector(true)}
            >
              <i className="fas fa-smile mr-1"></i> Sentimiento/actividad
            </Button>
            <Button 
              variant="light" 
              className="flex-grow-1 mr-2 mb-2 d-flex align-items-center justify-content-center"
              onClick={() => setShowGifSelector(true)}
            >
              <i className="fas fa-gif mr-1"></i> GIF
            </Button>
            <Button 
              variant="light" 
              className="flex-grow-1 mb-2 d-flex align-items-center justify-content-center"
            >
              <i className="fas fa-ellipsis-h"></i>
            </Button>
          </div>
          <Button variant="primary" className="w-100">
            Publicar
          </Button>
        </Modal.Body>
      </Modal>

      {/* Modal para seleccionar GIF */}
      <GifSelector
        show={showGifSelector}
        onHide={() => setShowGifSelector(false)}
        onSelectGif={handleGifSelect}
      />

      {/* Modal para seleccionar sentimientos/actividades */}
      <FeelingSelector
        show={showFeelingSelector}
        onHide={() => setShowFeelingSelector(false)}
        onSelectFeeling={handleFeelingSelect}
      />
    </>
  );
};

export default PostModal;
