import React from 'react';
import { InfoUserDetails } from '../../../user/sections/info/InfoUserDetails';

export const UserDetailsPanel: React.FC = ({currentUser}) => {
  return (
    <div className="user-details-panel p-4 bg-light rounded">
      <h5 className="fw-bold">Detalles</h5>
      <p>{currentUser?.bio || currentUser.website}</p>
      <button className="btn btn-secondary mb-3">Editar presentación</button>
      <InfoUserDetails
          selectedInfoSection={'Información general'}
          currentUser={currentUser}/>
      <button className="btn btn-secondary mb-3">Editar detalles</button>
      <button className="btn btn-secondary">Agregar destacados</button>
    </div>
  );
};
