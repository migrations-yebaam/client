import React from 'react';
import '../scss/LoginModal.scss';

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        <button className="login-modal__close" onClick={onClose}>
          &times;
        </button>
        <h2 className="login-modal__title">Iniciar sesión </h2>
        <input type="text" placeholder="nombre de usuario" className="login-modal__input" />
        <input type="password" placeholder="Contraseña" className="login-modal__input" />
        <div className="login-modal__remember">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Recordar contraseña</label>
        </div>
        <button className="login-modal__button">Iniciar sesión</button>
        <a href="#" className="login-modal__forgot">¿Olvidaste tu contraseña?</a>
      </div>
    </div>
  );
};

export default LoginModal;
