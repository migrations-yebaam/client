/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const UserPhotosComponent: React.FC = () => {
  const photos: any[] = [
    // Aquí irían las URLs de las fotos del usuario
  ];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Fotos</h2>
        <a href="#">Ver todas las fotos</a>
      </div>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt="User photo" className="img-thumbnail" />
        ))}
      </div>
    </div>
  );
};

export { UserPhotosComponent };
