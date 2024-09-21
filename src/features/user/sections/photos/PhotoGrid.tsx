import React from 'react';

interface PhotoGridProps {
  photos: { src: string; id: number }[];
}

export const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  return (
    <div className="row">
      {photos.map((photo) => (
        <div key={photo.id} className="col-4 mb-3">
          <div className="position-relative">
            <img src={photo.src} alt={`Photo ${photo.id}`} className="img-fluid rounded" />
            <button className="btn btn-light position-absolute top-0 end-0 m-1">
              <i className="bi bi-pencil"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
