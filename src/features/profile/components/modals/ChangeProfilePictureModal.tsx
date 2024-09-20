import React, { useState, useEffect } from 'react';
import { Modal } from './Modal';

interface ChangeProfilePictureModalProps {
  show: boolean;
  onClose: () => void;
  onSave: (image: File | null) => void;
}

const ChangeProfilePictureModal: React.FC<ChangeProfilePictureModalProps> = ({ show, onClose, onSave }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // Limpia el estado cuando el modal se cierra
  useEffect(() => {
    if (!show) {
      setSelectedImage(null);
      setPreview(null);
    }
  }, [show]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    if (selectedImage) {
      onSave(selectedImage);
    }
    onClose();  // Cierra el modal después de guardar
  };

  return (
    <Modal show={show} title="Cambiar foto de perfil" onClose={onClose} onSave={handleSave}>
      <div className="text-center">
        {preview ? (
          <img src={preview} alt="Preview" className="rounded-circle mb-3" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
        ) : (
          <div className="placeholder-image rounded-circle mb-3" style={{ width: '150px', height: '150px', backgroundColor: '#f0f0f0' }} />
        )}
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
    </Modal>
  );
};

export { ChangeProfilePictureModal };
