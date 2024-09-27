import React from 'react';
import '../scss/LoginInput.scss';

interface LoginInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LoginInput: React.FC<LoginInputProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="username"  // el nombre es importante para saber a qué parte del estado modificar
      value={value}
      onChange={onChange}
      placeholder="Nombre del usuario"
      className="login-input"
    />
  );
};

export default LoginInput;
