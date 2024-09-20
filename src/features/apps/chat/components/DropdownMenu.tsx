import React from 'react';

export const DropdownMenu: React.FC = () => {
  return (
    <div
      className="dropdown-menu dropdown-menu-end show"
      style={{ position: 'absolute', left: '-50px', top: '100%' }} // Ajusta según sea necesario
    >
      <ul className="list-unstyled mb-0">
        <li>
          <a href="#" className="dropdown-item d-flex align-items-center">
            <i className="bi bi-arrows-fullscreen me-2"></i> {/* Icono de fullscreen */}
          </a>
        </li>
        <li>
          <a href="#" className="dropdown-item d-flex align-items-center">
            <i className="bi bi-pencil-square me-2"></i> {/* Icono de editar */}
          </a>
        </li>
      </ul>
    </div>
  );
};
