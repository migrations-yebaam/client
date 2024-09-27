import React from 'react';
import AddAccountModal from './AddAccountModal';
import ProfileLoginModal from './ProfileLoginModal';

interface ModalManagerProps {
  isAddAccount: boolean; // Define qué tipo de modal mostrar
  onClose: () => void;
  avatarUrl?: string; // Opcional, solo para el perfil
  name?: string; // Opcional, solo para el perfil
}

const ModalManager: React.FC<ModalManagerProps> = ({ isAddAccount, onClose, avatarUrl, name }) => {
  return (
    <>
      {isAddAccount ? (
        <AddAccountModal onClose={onClose} />
      ) : (
        <ProfileLoginModal onClose={onClose} avatarUrl={avatarUrl} name={name} />
      )}
    </>
  );
};

export default ModalManager;
