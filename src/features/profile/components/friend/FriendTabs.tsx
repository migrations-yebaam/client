import React, { useState } from 'react';

export const FriendTabs: React.FC = ({filterTab, setFilterTab}) => {

  const tabs = [
    'Todos los amigos',
    'Agregados recientemente',
    'Cumpleaños',
    'Ciudad actual',
    'Ciudad de origen',
    'Seguidores',
    'Seguidos'
  ];

  return (
    <div className="mb-4">
      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <li key={tab} className="nav-item">
            <a
              className={`nav-link ${filterTab === tab ? 'active' : ''}`}
              onClick={() => setFilterTab(tab)}
              href="#!"
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
