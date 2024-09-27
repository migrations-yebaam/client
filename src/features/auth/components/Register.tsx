import React, { useState } from 'react';
import '../scss/RegisterModal.scss';
import { Link } from 'react-router-dom';

interface RegisterModalProps {
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ onClose }) => {
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  // Suponemos que tienes una función para manejar el envío del formulario
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Añadir lógica de validación aquí
  };

  return (
    <div className="register-modal-overlay">
      <div className="register-modal">
        <button className="register-modal__close" onClick={onClose}>&times;</button>
        <h2 className="register-modal__title">Registrarte</h2>
        <p className="register-modal__subtitle">Es rápido y fácil.</p>
        <form onSubmit={handleSubmit} className="register-modal__inputs">
          <div className="register-modal__name-inputs-entitie">
            <input type="text" placeholder="Nombre" className={`register-modal__input ${errors.firstName ? 'register-modal__input--error' : ''}`} />
            <input type="text" placeholder="Apellido" className="register-modal__input" />
          </div>
          <input type="text" placeholder="Número de celular o correo electrónico" className="register-modal__input" />
          <input type="password" placeholder="Contraseña nueva" className="register-modal__input" />
          {/* Otros campos de formulario */}
          <button type="submit" className="register-modal__submit">Registrarte</button>
        </form>
        <p className="register-modal__terms">
          Al hacer clic en "Registrarte", aceptas nuestras 
          <a href="/terminos-y-condiciones" target="_blank" rel="noopener noreferrer">Condiciones</a>, 
          la <a href="/politica-de-privacidad" target="_blank" rel="noopener noreferrer">Política de privacidad</a> 
          y la Política de cookies.
        </p>

      </div>
    </div>
  );
};

export default RegisterModal;
