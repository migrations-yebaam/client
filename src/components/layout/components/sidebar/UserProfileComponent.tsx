import React from 'react';

export const UserProfileComponent: React.FC = () => {
  return (
    <div className="user-profile d-flex align-items-center mb-4">
      <img 
        src="https://images.unsplash.com/photo-1723441857662-d465a52e78d0?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Profile" 
        className="rounded-circle me-2"
        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
      />
      <div>
        <h6 className="mb-0">Flower Moreno</h6>
      </div>
    </div>
  );
};
