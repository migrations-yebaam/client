import React from 'react';

interface GroupCardProps {
  name: string;
  type: string;
  members: string;
  imageSrc: string;
}

export const GroupCard: React.FC<GroupCardProps> = ({ name, type, members, imageSrc }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: '18rem' }}>
      <img src={imageSrc} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><small className="text-muted">{type} · {members}</small></p>
      </div>
    </div>
  );
};
