import React from 'react';
import '../scss/ForgotPasswordModal.scss';

interface ForgotPasswordModalProps {
  onClose: () => void;
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ onClose }) => {
  return (
    <div className="forgot-password-modal-overlay">
      <div className="forgot-password-modal">
        <h2 className="forgot-password-modal__title">Recupera tu cuenta</h2>
        <p>Ingresa tu correo electrónico o número de celular para buscar tu cuenta.</p>
        <input
          type="text"
          placeholder="Correo electrónico o número de celular"
          className="forgot-password-modal__input"
        />
        <div className="forgot-password-modal__buttons">
          <button onClick={onClose} className="forgot-password-modal__cancel-button">Cancelar</button>
          <button className="forgot-password-modal__submit-button">Buscar</button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
