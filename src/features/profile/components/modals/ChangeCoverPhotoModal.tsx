import React, { useState } from 'react';
import { Modal } from './Modal';

interface ChangeCoverPhotoModalProps {
  show: boolean;
  onClose: () => void;
  onSave: (image: File | null) => void;
}

const ChangeCoverPhotoModal: React.FC<ChangeCoverPhotoModalProps> = ({ show, onClose, onSave }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

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
  };

  return (
    <Modal show={show} title="Cambiar foto de portada" onClose={onClose} onSave={handleSave}>
      <div className="text-center">
        {preview ? (
          <img src={preview} alt="Preview" className="mb-3" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
        ) : (
          <div className="placeholder-image mb-3" style={{ width: '100%', height: '200px', backgroundColor: '#f0f0f0' }} />
        )}
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
    </Modal>
  );
};

export { ChangeCoverPhotoModal };
