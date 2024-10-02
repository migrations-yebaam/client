import React from 'react';
import Button from 'react-bootstrap/Button';

interface MediaUploaderProps {
  onClose: () => void;
}

const MediaUploader: React.FC<MediaUploaderProps> = ({ onClose }) => {
  return (
    <div className="media-upload-container p-3 mb-3" style={{ border: '1px solid #ddd', borderRadius: '8px' }}>
      <div className="d-flex justify-content-between align-items-center">
        <span className="text-muted">Agregar fotos/videos</span>
        <Button variant="light" onClick={onClose}>
          <i className="fas fa-times"></i>
        </Button>
      </div>
      <div className="text-center my-4">
        <i className="fas fa-plus-circle fa-2x text-muted"></i>
        <p className="mt-2 text-muted">Agregar fotos/videos o arrastra y suelta</p>
      </div>
      <div className="text-center">
        <Button variant="secondary">Agregar</Button>
      </div>
    </div>
  );
};

export default MediaUploader;
