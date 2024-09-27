import React from 'react';
import './scss/DropdownMenu.scss';

const DropdownMenu: React.FC = () => {
  return (
    <div className="dropdown-menu">
      <div className="user-info">
        <img
          src={'https://via.placeholder.com/50'}
          alt="Profile"
          className="profile-picture"
        />
        <span>Flower Moreno</span>
      </div>

      <div className="user-profiles">
        <div className="profile-item">
          <img src={'https://via.placeholder.com/20'} alt="GT Games" className="profile-icon" />
          GT Games
        </div>
        <div className="profile-item">
          <img src={'https://via.placeholder.com/20'} alt="Thanatos" className="profile-icon" />
          Thanatos
        </div>
        <div className="see-all-profiles">Ver todos los perfiles</div>
      </div>

      <hr />

      <div className="menu-options">
        <div className="menu-item">Configuración y privacidad</div>
        <div className="menu-item">Ayuda y soporte técnico</div>
        <div className="menu-item">Pantalla y accesibilidad</div>
        <div className="menu-item">Enviar comentarios</div>
        <div className="menu-item">Cerrar sesión</div>
      </div>

      <div className="footer">
        <span>Privacidad · Condiciones · Publicidad · Opciones de anuncios · Cookies</span>
        <span>Meta © 2024</span>
      </div>
    </div>
  );
};

export default DropdownMenu;
