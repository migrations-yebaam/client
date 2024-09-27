import React from 'react';
import '../scss/CreateAccountButton.scss';

interface CreateAccountButtonProps {
  className?: string;
}

const CreateAccountButton: React.FC<CreateAccountButtonProps> = ({ className }) => {
  return (
    <button className={`create-account-button ${className}`}>
      Crear cuenta nueva
    </button>
  );
};

export default CreateAccountButton;
