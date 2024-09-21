import React, { useState } from 'react';
import { DropdownMenu } from '../modals/DropdownMenu';

interface InfoDetailItemProps {
  icon: string;
  title: string;
  subtitle: string;
  privacyIcon?: string;
}

export const InfoDetailItem: React.FC<InfoDetailItemProps> = ({ icon, title, subtitle, privacyIcon }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleViewImportant = () => {
    // Lógica para ver acontecimiento importante
    console.log('Ver acontecimiento importante');
    setShowMenu(false);
  };

  const handleEdit = () => {
    // Lógica para editar
    console.log('Editar lugar de trabajo');
    setShowMenu(false);
  };

  const handleDelete = () => {
    // Lógica para eliminar
    console.log('Eliminar lugar de trabajo');
    setShowMenu(false);
  };

  return (
    <div className="d-flex align-items-center mb-3 position-relative">
      <i className={`bi ${icon} me-3`} style={{ fontSize: '1.5rem' }}></i>
      <div>
        <h6 className="mb-0 fw-bold">{title}</h6>
        <small className="text-muted">{subtitle}</small>
      </div>
      {privacyIcon && (
        <div className="ms-auto position-relative">
          <i
            className={`bi ${privacyIcon} me-2 cursor-pointer`}
            style={{ fontSize: '1.2rem' }}
            onClick={handleMenuToggle}
          ></i>
          {showMenu && (
            <DropdownMenu
              onViewImportant={handleViewImportant}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </div>
      )}
    </div>
  );
};
