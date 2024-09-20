import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface AdComponentProps {
  imageUrl: string;
  title: string;
  url: string;
}

export const AdComponent: React.FC<AdComponentProps> = ({ imageUrl, title, url }) => {
  return (
    <div className="d-flex align-items-center mb-3">
      <img src={imageUrl} alt={title} className="rounded me-3" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
      <div>
        <h6 className="mb-0">{title}</h6>
        <small className="text-muted">{url}</small>
      </div>
    </div>
  );
};
