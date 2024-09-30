import React from 'react';

export const FriendsPanel: React.FC = () => {
  // Ejemplo de amigos
  const friends = [
    { name: 'Jim Oliver Cano', photo: 'https://via.placeholder.com/100' },
    { name: 'Blanca Marlenis Moreno Potes', photo: 'https://via.placeholder.com/100' },
    { name: 'Alexis Córdoba', photo: 'https://via.placeholder.com/100' },
    { name: 'Darlinton Lozano', photo: 'https://via.placeholder.com/100' },
    { name: 'Andres Bedoya', photo: 'https://via.placeholder.com/100' },
    { name: 'Andres D Garcia Hernandez', photo: 'https://via.placeholder.com/100' },
    { name: 'Edinson Palacios', photo: 'https://via.placeholder.com/100' },
    { name: 'EmprMusic', photo: 'https://via.placeholder.com/100' },
  ];

  return (
    <div className="user-friends-panel mt-4 p-4 bg-light rounded">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Amigos</h5>
        <a href="#!" className="text-primary">Ver todos los amigos</a>
      </div>
      <div className="row">
        {friends?.map((friend, index) => (
          <div key={index} className="col-3 mb-2 text-center">
            <img src={friend.photo} alt={friend.name} className="img-fluid rounded-circle mb-1" />
            <p className="mb-0 small">{friend.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
