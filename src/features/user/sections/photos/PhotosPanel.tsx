import React from 'react';

export const PhotosPanel: React.FC = () => {
  // Ejemplo de fotos
  const photos = [
    'https://via.placeholder.com/100', 'https://via.placeholder.com/100',
    'https://via.placeholder.com/100', 'https://via.placeholder.com/100',
    'https://via.placeholder.com/100', 'https://via.placeholder.com/100',
    'https://via.placeholder.com/100', 'https://via.placeholder.com/100',
  ];

  return (
    <div className="user-photos-panel mt-4 p-4 bg-light rounded">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Fotos</h5>
        <a href="#!" className="text-primary">Ver todas las fotos</a>
      </div>
      <div className="row">
        {photos.map((photo, index) => (
          <div key={index} className="col-3 mb-2">
            <img src={photo} alt={`Foto ${index}`} className="img-fluid rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};
