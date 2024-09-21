import React from 'react';

export const UserDetailsPanel: React.FC = () => {
  return (
    <div className="user-details-panel p-4 bg-light rounded">
      <h5 className="fw-bold">Detalles</h5>
      <p>soy virgo</p>
      <button className="btn btn-secondary mb-3">Editar presentación</button>
      <ul className="list-unstyled">
        <li className="mb-2">
          <i className="bi bi-mortarboard me-2"></i> Estudió Pregrado en Ingeniería de Sistemas e Informática en UNIR - La Universidad Internacional de La Rioja en Colombia
        </li>
        <li className="mb-2">
          <i className="bi bi-mortarboard me-2"></i> Estudió Máster Desarrollo Web Full Stack + MultiCloud en UNIR - La Universidad Internacional de La Rioja en Colombia
        </li>
        <li className="mb-2">
          <i className="bi bi-mortarboard me-2"></i> Estudió en Universidad del Area Andina
        </li>
      </ul>
      <button className="btn btn-secondary mb-3">Editar detalles</button>
      <button className="btn btn-secondary">Agregar destacados</button>
    </div>
  );
};
