import React, { useState } from 'react';

interface FriendCardProps {
  name: string;
  mutualFriends: number;
  imageSrc: string;
}

export const FriendCard: React.FC<FriendCardProps> = ({ name, mutualFriends, imageSrc }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="d-flex align-items-center mb-3">
      <img src={imageSrc} alt={name} className="rounded-circle me-3" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
      <div>
        <h6 className="mb-0">{name}</h6>
        <small className="text-muted">{mutualFriends} amigos en común</small>
      </div>
      <div className="ms-auto position-relative">
        <button className="btn btn-light btn-sm" onClick={toggleDropdown}>
          <i className="bi bi-three-dots"></i>
        </button>
        {dropdownOpen && (
          <div className="dropdown-menu dropdown-menu-end show" style={{ position: 'absolute', top: '100%', right: 0 }}>
            <button className="dropdown-item" onClick={()=>{}}>
              <i className="bi bi-person"></i> Editar lista de amigos
            </button>
            <button className="dropdown-item" onClick={() => { }}>
              <i className="bi bi-person-plus"></i> Seguir
            </button>
            <button className="dropdown-item text-danger" onClick={() => {  }}>
              <i className="bi bi-person-x"></i> Eliminar de mis amigos
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
