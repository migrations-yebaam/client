import React from 'react';
import '../../auth/scss/LoginModal.scss'; // Usamos el mismo estilo

interface AddAccountModalProps {
  onClose: () => void;
}

const AddAccountModal: React.FC<AddAccountModalProps> = ({ onClose }) => {
  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        <button className="login-modal__close" onClick={onClose}>
          &times;
        </button>
        <h2 className="login-modal__title">Iniciar sesión </h2>
        <input type="text" placeholder="Número de teléfono o correo electrónico" className="login-modal__input" />
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

export default AddAccountModal;
