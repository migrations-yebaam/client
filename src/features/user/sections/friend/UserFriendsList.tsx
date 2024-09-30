import React from 'react';

export const UserFriendsList: React.FC = ({friendsData}) => {
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
          <a className="nav-link" href="#!">Amigos en común</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">Seguidos</a>
        </li>
      </ul>

      <div className="row">
        {friendsData.map((friend, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card d-flex flex-row align-items-center p-3">
              <img src={friend.avatar} alt={friend.name} className="rounded-circle me-3" style={{ width: '60px', height: '60px' }} />
              <div className="flex-grow-1">
                <h6 className="mb-0">{friend.name}</h6>
                <small className="text-muted">{friend.mutualFriends} amigo{friend.mutualFriends > 1 ? 's' : ''} en común</small>
              </div>
              {friend.isFriend ? (
                <button className="btn btn-light btn-sm ms-2">
                  <i className="bi bi-three-dots"></i>
                </button>
              ) : (
                <button className="btn btn-primary btn-sm ms-2">Agregar a amigos</button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-3">
        <button className="btn btn-secondary">Ver todo</button>
      </div>
    </div>
  );
};
