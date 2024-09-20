import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ContactItemComponentProps {
  id: string;
  imageUrl: string;
  name: string;
  isOnline: boolean;
}

export const ContactItemComponent: React.FC<ContactItemComponentProps> = ({ id, imageUrl, name, isOnline }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${id}`);
  };

  return (
    <div className="d-flex align-items-center mb-2" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="position-relative">
        <img src={imageUrl} alt={name} className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
        {isOnline && <span className="position-absolute bottom-0 end-0 bg-success rounded-circle" style={{ width: '10px', height: '10px' }}></span>}
      </div>
      <span>{name}</span>
    </div>
  );
};
