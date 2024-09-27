import React from 'react';
import '../../auth/scss/LoginModal.scss'; // Usamos el mismo estilo

interface ProfileLoginModalProps {
  name?: string;
  avatarUrl?: string;
  onClose: () => void;
}

const ProfileLoginModal: React.FC<ProfileLoginModalProps> = ({ name, avatarUrl, onClose }) => {
  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        <button className="login-modal__close" onClick={onClose}>
          &times;
        </button>
        <img src={avatarUrl} alt={`${name}'s avatar`} className="login-modal__avatar" />
        <h2 className="login-modal__name">{name}</h2>
        <input type="password" placeholder="Contraseña" className="login-modal__input" />
        <div className="login-modal__remember">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Recordar contraseña</label>
        </div>
        <button className="login-modal__button">Iniciar sesión</button>
        <a href="#" className="login-modal__forgot">¿Olvidaste tu contraseñad?</a>
      </div>
    </div>
  );
};

export default ProfileLoginModal;
