import React, { useState } from 'react';
import { DropdownMenu } from './DropdownMenu';  // Asegúrate de ajustar la ruta según tu estructura de carpetas

export const ChatHeader: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="card-header" id="kt_chat_messenger_header">
      <div className="card-title">
        <div className="d-flex justify-content-center flex-column me-3">
          <a href="#" className="fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1">
            Brian Cox
          </a>
          <div className="mb-0 lh-1">
            <span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
            <span className="fs-7 fw-bold text-gray-500">Active</span>
          </div>
        </div>
      </div>

      <div className="card-toolbar">
        <div className="me-n3 position-relative">
          <button
            className="btn btn-sm btn-icon btn-active-light-primary"
            onClick={toggleDropdown}
          >
            <i className="bi bi-three-dots fs-2"></i>
          </button>
          {isDropdownOpen && <DropdownMenu />}
        </div>
      </div>
    </div>
  );
};
