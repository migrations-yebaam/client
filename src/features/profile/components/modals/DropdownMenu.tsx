import React from 'react';

interface DropdownMenuProps {
  onViewImportant: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ onViewImportant, onEdit, onDelete }) => {
  return (
    <div className="dropdown-menu show position-absolute" style={{ right: 0, zIndex: 1000 }}>
      <button className="dropdown-item" onClick={onViewImportant}>
        <i className="bi bi-star me-2"></i> Ver acontecimiento importante
      </button>
      <button className="dropdown-item" onClick={onEdit}>
        <i className="bi bi-pencil me-2"></i> Editar lugar de trabajo
      </button>
      <button className="dropdown-item text-danger" onClick={onDelete}>
        <i className="bi bi-trash me-2"></i> Eliminar lugar de trabajo
      </button>
    </div>
  );
};
