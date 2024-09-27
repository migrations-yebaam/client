import React from 'react';
import '../scss/PasswordInput.scss';

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange }) => {
  return (
    <input
      type="password"
      name="password"  // el nombre es importante para saber a qué parte del estado modificar
      value={value}
      onChange={onChange}
      placeholder="Contraseña"
      className="password-input"
    />
  );
};

export default PasswordInput;
