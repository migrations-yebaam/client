import { FC, ReactElement, useState } from 'react';

import { IHeader, IHeaderModalProps } from '../interfaces/header.interface';
import LoginModal from '../../../features/auth/components/Login';
import RegisterModal from '../../../features/auth/components/Register';

const Header: FC<IHeader> = (): ReactElement => {
  const [showModal, setShowModal] = useState<IHeaderModalProps>({
    login: false,
    register: false,
    forgotPassword: false
  });

  return (
    <>
      {showModal.login && (
        <LoginModal
          onClose={() => setShowModal((item: IHeaderModalProps) => ({ ...item, login: false }))}
          onToggle={() => setShowModal((item: IHeaderModalProps) => ({ ...item, login: false, register: true }))}
          onTogglePassword={() => setShowModal((item: IHeaderModalProps) => ({ ...item, login: false, forgotPassword: true }))}
        />
      )}
      {showModal.register && (
        <RegisterModal
          onClose={() => setShowModal((item: IHeaderModalProps) => ({ ...item, register: false }))}
          onToggle={() => setShowModal((item: IHeaderModalProps) => ({ ...item, login: true, register: false }))}
        />
      )}
  

      <header>header index</header>
      <LoginModal />
    </>
  );
};

export default Header;
