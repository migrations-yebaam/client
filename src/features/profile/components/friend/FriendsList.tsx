import React from 'react';

interface Friend {
  name: string;
  mutualFriends: number;
  avatar: string;
}

const friendsData: Friend[] = [
  { name: 'Deyson Moreno', mutualFriends: 7, avatar: 'https://via.placeholder.com/50' },
  { name: 'Nilo Segundo', mutualFriends: 5, avatar: 'https://via.placeholder.com/50' },
  { name: 'Leydy Jhoana', mutualFriends: 4, avatar: 'https://via.placeholder.com/50' },
  { name: 'Andres Bedoya', mutualFriends: 15, avatar: 'https://via.placeholder.com/50' },
  { name: 'Blanca Marlenis Moreno Potes', mutualFriends: 26, avatar: 'https://via.placeholder.com/50' },
  { name: 'Feliciano Becerravalencia', mutualFriends: 10, avatar: 'https://via.placeholder.com/50' },
];

export const FriendsList: React.FC = () => {
  return (
    <div className="friends-list mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Amigos</h5>
        <div>
          <a href="#!" className="text-primary me-3">Solicitudes de amistad</a>
          <a href="#!" className="text-primary">Buscar amigos</a>
        </div>
      </div>
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <a className="nav-link active" href="#!">Todos los amigos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">Agregados recientemente</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">Cumpleaños</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">Ciudad actual</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">Ciudad de origen</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">Seguidores</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">Seguidos</a>
        </li>
      </ul>
      <div className="list-group">
        {friendsData.map((friend, index) => (
          <div key={index} className="list-group-item d-flex align-items-center">
            <img src={friend.avatar} alt={friend.name} className="rounded-circle me-3" style={{ width: '50px', height: '50px' }} />
            <div>
              <h6 className="mb-0">{friend.name}</h6>
              <small className="text-muted">{friend.mutualFriends} amigos en común 'deprecar'</small>
            </div>
            <button className="btn btn-light ms-auto">
              <i className="bi bi-three-dots"></i>
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-secondary">Ver todo</button>
      </div>
    </div>
  );
};
