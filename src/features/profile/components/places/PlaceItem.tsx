import React from 'react';

interface PlaceItemProps {
  name: string;
  location: string;
  visitedDate: string;
  imageUrl: string;
}

export const PlaceItem: React.FC<PlaceItemProps> = ({ name, location, visitedDate, imageUrl }) => {
  return (
    <div className="list-group-item d-flex align-items-center">
      <img src={imageUrl} alt={name} className="rounded me-3" style={{ width: '50px', height: '50px' }} />
      <div>
        <h6 className="mb-0">{name}</h6>
        <small className="text-muted">{location}</small>
        <p className="mb-0">{visitedDate}</p>
      </div>
    </div>
  );
};
