import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useAppSelector } from '../../../../store/store';
import { IReduxState } from '../../../../store/store.interface';

interface CreatePostModalProps {
  show: boolean;
  onClose: () => void;
}

export const CreatePostModal: React.FC<CreatePostModalProps> = ({ show, onClose }) => {
  const [postContent, setPostContent] = useState('');
  const [background, setBackground] = useState<string | null>(null); // Nuevo estado para el fondo
  const authUser = useAppSelector((state: IReduxState) => state.authUser);

  const handlePostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostContent(e.target.value);
  };

  const handleBackgroundChange = (bg: string) => {
    setBackground(bg);
  };

  const handlePost = () => {
    // Lógica para manejar la publicación
    console.log('Publicar:', { content: postContent, background });
    onClose(); // Cierra el modal después de publicar
  };

  const backgroundOptions = [
    '#ff0044', '#ff9900', '#00ff44', '#0044ff', '#ff44ff', '#000000', '#ffffff', // Colores sólidos
    'url(https://via.placeholder.com/600x400)', // Imagen de ejemplo
    // Añadir más opciones de colores o imágenes aquí
  ];

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Crear publicación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex align-items-center mb-3">
          <img
            src={authUser.profilePicture || ''}
            alt="User"
            className="rounded-circle me-2"
            style={{ width: '45px', height: '45px', objectFit: 'cover' }} // Ajuste de tamaño a 45x45
          />
          <div>
            <h6 className="mb-0">{authUser.username}</h6>
            <small className="text-muted">Público</small>
          </div>
        </div>
        <div
          className="mb-3"
          style={{
            background: background || 'transparent',
            padding: background ? '20px' : '0',
            borderRadius: '8px',
            minHeight: '100px',
            color: background ? '#fff' : '#000',
          }}
        >
          <textarea
            className="form-control"
            placeholder="¿Qué estás pensando?"
            rows={4}
            value={postContent}
            onChange={handlePostChange}
            style={{
              background: 'transparent',
              border: 'none',
              color: background ? '#fff' : '#000',
              resize: 'none',
            }}
          ></textarea>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            {backgroundOptions.map((bg, index) => (
              <button
                key={index}
                onClick={() => handleBackgroundChange(bg)}
                style={{
                  width: '40px',
                  height: '40px',
                  background: bg.includes('url') ? bg : bg,
                  backgroundSize: 'cover',
                  border: background === bg ? '2px solid #000' : '1px solid #ddd',
                  borderRadius: '4px',
                  marginRight: '5px',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cancelar</Button>
        <Button variant="primary" onClick={handlePost}>Publicar</Button>
      </Modal.Footer>
    </Modal>
  );
};
