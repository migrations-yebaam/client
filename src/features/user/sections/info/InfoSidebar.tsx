import React from 'react';

export const InfoUserSidebar: React.FC = () => {
  return (
    <div className="info-sidebar">
      <ul className="list-group">
        <li className="list-group-item active">Información general</li>
        <li className="list-group-item">Empleo y formación</li>
        <li className="list-group-item">Lugares de residencia</li>
        <li className="list-group-item">Información básica y de contacto</li>
        <li className="list-group-item">Familia y relaciones</li>
        <li className="list-group-item">Información sobre ti</li>
        <li className="list-group-item">Acontecimientos importantes</li>
      </ul>
    </div>
  );
};
