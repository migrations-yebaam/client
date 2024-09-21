import React from 'react';

type IUserFriendsPanel = {
  friends: any[];
};

export const UserFriendsPanel: React.FC<IUserFriendsPanel> = ({friends}) => {

  return (
    <div className="user-friends-panel mt-4 p-4 bg-light rounded">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Amigos</h5>
        <a href="/" className="text-primary">Ver todos los amigos</a>
      </div>
      <div className="row">
        {friends.map((friend, index) => (
          <div key={index} className="col-3 mb-2 text-center">
            <img src={friend.imageSrc} alt={friend.name} className="img-fluid rounded-circle mb-1" />
            <p className="mb-0 small">{friend.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
