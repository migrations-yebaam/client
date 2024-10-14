import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../scss/TextStoryModal.scss';
import { useAppSelector } from '../../../store/store';
import { IReduxState } from '../../../store/store.interface';
import { useCreateHistorieMutation } from '../services/historie.service';
import { IHistoriePayload } from '../interfaces/historie.interfaces';

interface TextStoryModalProps {
  show: boolean;
  onClose: () => void;
}

const TextStoryModal: React.FC<TextStoryModalProps> = ({ show, onClose }) => {
  const authUser = useAppSelector((state: IReduxState) => state.authUser);
  const [text, setText] = useState('');
  const [bgColor, setBgColor] = useState('#000000');
  const [fontStyle, setFontStyle] = useState('light');
  const [mediaUrl, setMediaUrl] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<'image' | 'video' | null>(null);
  
  const [createHistorie] = useCreateHistorieMutation(); // Usar la mutación para crear historias

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleBgColorChange = (color: string) => {
    setBgColor(color);
  };

  const handleFontStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFontStyle(e.target.value);
  };
  const handleShareStory = async () => {
    const payload: IHistoriePayload = {
      content: text,
      mediaUrl: mediaUrl || '', // Si no hay mediaUrl, usar un valor vacío
      mediaType: mediaType as 'image' | 'video' || undefined, // Asegurarse de que mediaType sea uno de los valores permitidos
    };
  
    try {
      await createHistorie(payload).unwrap(); // Enviar la historia al backend
      onClose(); // Cerrar el modal después de compartir
    } catch (error) {
      console.error('Error creating story', error);
    }
  };
  
  return (
    <Modal show={show} onHide={onClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Tu historia</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex">
        <div className="text-story-settings d-flex flex-column">
          <div className="text-story-profile d-flex align-items-center">
            <img
              src={`${authUser.profilePicture}`}
              alt="Profile"
              className="rounded-circle"
              style={{ width: '50px', height: '50px', objectFit: 'cover' }}
            />
            <span className="ml-3 font-weight-bold">{authUser.firstName}</span>
          </div>

          <textarea
            className="form-control my-3"
            value={text}
            onChange={handleTextChange}
            placeholder="Empieza a escribir"
            style={{ minHeight: '100px' }}
          />

          <div className="text-story-options">
            <div className="mb-3">
              <label htmlFor="fontStyle">Estilo de fuente</label>
              <select
                id="fontStyle"
                className="form-control"
                value={fontStyle}
                onChange={handleFontStyleChange}
              >
                <option value="light">Claro</option>
                <option value="bold">Negrita</option>
              </select>
            </div>

            <div className="text-story-bg-colors">
              <label>Fondos</label>
              <div className="d-flex flex-wrap">
                <button
                  className="bg-color-circle"
                  style={{ backgroundColor: '#FF5733' }}
                  onClick={() => handleBgColorChange('#FF5733')}
                />
                <button
                  className="bg-color-circle"
                  style={{ backgroundColor: '#33FF57' }}
                  onClick={() => handleBgColorChange('#33FF57')}
                />
                <button
                  className="bg-color-circle"
                  style={{ backgroundColor: '#3357FF' }}
                  onClick={() => handleBgColorChange('#3357FF')}
                />
              </div>
            </div>
          </div>

          <div className="text-story-actions d-flex justify-content-between mt-4">
            <Button variant="light" onClick={onClose}>
              Descartar
            </Button>
            <Button variant="primary" onClick={handleShareStory}>
              Compartir en historia
            </Button>
          </div>
        </div>

        <div className="text-story-preview ml-4">
          <div className="story-preview-frame" style={{ backgroundColor: bgColor }}>
            <p className={`story-preview-text ${fontStyle}`}>
              {text || 'Empieza a escribir'}
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default TextStoryModal;
