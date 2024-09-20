import React from 'react';

interface PersonCardProps {
  name: string;
  mutualFriends: number;
  avatar: string;
}

export const PersonCard: React.FC<PersonCardProps> = ({ name, mutualFriends, avatar }) => {
  return (
    <div className="card">
      <img src={avatar} alt={name} className="card-img-top" />
      <div className="card-body text-center">
        <h6 className="card-title">{name}</h6>
        <p className="card-text text-muted">{mutualFriends} amigo(s) en común</p>
        <button className="btn btn-primary btn-sm mb-2">Agregar a amigos</button>
        <button className="btn btn-light btn-sm">Eliminar</button>
      </div>
    </div>
  );
};
