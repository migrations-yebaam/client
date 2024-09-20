import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ProfilePageComponentProps {
  imageUrl: string;
  name: string;
}

export const ProfilePageComponent: React.FC<ProfilePageComponentProps> = ({ imageUrl, name }) => {
  return (
    <div className="d-flex align-items-center mb-3">
      <img src={imageUrl} alt={name} className="rounded-circle me-3" style={{ width: '40px', height: '40px' }} />
      <h6 className="mb-0">{name}</h6>
    </div>
  );
};
