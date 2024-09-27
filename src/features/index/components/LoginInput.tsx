import React from 'react';
import '../scss/LoginInput.scss';

const LoginInput: React.FC = () => {
  return (
    <input
      type="text"
      placeholder="Número de teléfono o correo electrónico"
      className="login-input"
    />
  );
};

export default LoginInput;
