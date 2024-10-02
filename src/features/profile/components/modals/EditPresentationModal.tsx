import React, { useState } from 'react';
import { Modal } from './Modal'; 

interface EditPresentationModalProps {
  show: boolean;
  onClose: () => void;
  onSave: (newPresentation: string) => void;
  currentPresentation: string; 
}

export const EditPresentationModal: React.FC<EditPresentationModalProps> = ({
  show,
  onClose,
  onSave,
  currentPresentation,
}) => {
  const [newPresentation, setNewPresentation] = useState(currentPresentation); // Estado para la nueva presentación

  const handleSave = () => {
    onSave(newPresentation); // Guardar la nueva presentación
  };

  return (
    <Modal show={show} title="Editar Presentación" onClose={onClose} onSave={handleSave}>
      <div className="form-group">
        <label htmlFor="presentation">Presentación</label>
        <textarea
          id="presentation"
          className="form-control"
          rows={4}
          value={newPresentation}
          onChange={(e) => setNewPresentation(e.target.value)} // Actualizar el estado con el nuevo valor
        />
      </div>
    </Modal>
  );
};
