import React from 'react';
import '../scss/LoginButton.scss';

const LoginButton: React.FC = () => {
  return (
    <button type="submit" className="login-button">
      Iniciar sesión
    </button>
  );
};

export default LoginButton;
