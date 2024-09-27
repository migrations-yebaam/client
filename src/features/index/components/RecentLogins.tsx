import React from 'react';
import '../scss/RecentLogins.scss';
import RecentLoginAccount from './RecentLoginAccount';
import AddAccountButton from './AddAccountButton';

const RecentLogins: React.FC = () => {
  return (
    <section className="recent-logins">
      <h2 className="recent-logins__title">Inicios de sesión recientes</h2>
      <div className="recent-logins__accounts">
        <RecentLoginAccount name="Flower" avatarUrl="https://via.placeholder.com/50" />
        <AddAccountButton />
      </div>
    </section>
  );
};

export default RecentLogins;
