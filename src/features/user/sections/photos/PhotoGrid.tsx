import React from 'react';
import { isValidPhoto } from '../../../../utils/generic';

interface PhotoGridProps {
  photos: { src: string; id: number }[];
}


export const PhotoGrid: React.FC<PhotoGridProps> = ({ photos }) => {
  if(!photos || photos.length === 0) return <></>;
  return (
    <div className="row">
      {photos.map((photo) => (
        <div key={photo.id} className="col-4 mb-3">
          <div className="position-relative">
             {isValidPhoto(photo.image) && <img src={photo.image} alt={`Photo ${photo.id}`} className="img-fluid rounded" />}
            <button className="btn btn-light position-absolute top-0 end-0 m-1">
              <i className="bi bi-pencil"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
