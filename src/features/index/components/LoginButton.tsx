import React from 'react';
import '../scss/LoginButton.scss';

interface LoginButtonProps {
  onClick: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
  return (
    <button type="button" className="login-button" onClick={onClick}>
      Iniciar sesión
    </button>
  );
};

export default LoginButton;
