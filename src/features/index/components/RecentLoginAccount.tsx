import React, { useState } from 'react';
import '../scss/RecentLoginAccount.scss';
import ModalManager from '../modals/ModalManager';

interface RecentLoginAccountProps {
  name: string;
  avatarUrl: string;
}

const RecentLoginAccount: React.FC<RecentLoginAccountProps> = ({ name, avatarUrl }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="recent-login-account" onClick={handleOpenModal}>
        <img src={avatarUrl} alt={`${name}'s avatar`} className="recent-login-account__avatar" />
        <span className="recent-login-account__name">{name}</span>
      </div>
      {showModal && <ModalManager isAddAccount={false} onClose={handleCloseModal} avatarUrl={avatarUrl} name={name} />}
    </>
  );
};

export default RecentLoginAccount;
