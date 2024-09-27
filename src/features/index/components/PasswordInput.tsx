import React from 'react';
import '../scss/PasswordInput.scss';

const PasswordInput: React.FC = () => {
  return (
    <input
      type="password"
      placeholder="Contraseña"
      className="password-input"
    />
  );
};

export default PasswordInput;
