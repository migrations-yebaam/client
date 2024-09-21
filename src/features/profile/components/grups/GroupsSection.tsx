import React, { useState } from 'react';
import { GroupCard } from './GroupCard';

export const GroupsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Públicos');

  const tabs = ['Públicos', 'Privados', 'Tus Grupos'];
  const groups = [
    {
      name: 'CCNA, CCNP CERTIFICATION',
      type: 'Grupo público',
      members: '1,9 mil miembros',
      imageSrc: 'link-to-image1.jpg',
    },
    {
      name: 'Arriendos en medellin sin inmobiliarias 100%',
      type: 'Grupo público',
      members: '94,4 mil miembros',
      imageSrc: 'link-to-image2.jpg',
    },
    {
      name: 'Blockchain, NFT, Play2Earn, Web3, RWA, Real World Assets, Tokenisation',
      type: 'Grupo público',
      members: '18,8 mil miembros',
      imageSrc: 'link-to-image3.jpg',
    },
    // Agrega más grupos según sea necesario
  ];

  return (
    <div className="groups-section mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Grupos</h5>
        <button className="btn btn-light">
          <i className="bi bi-three-dots"></i>
        </button>
      </div>
      <ul className="nav nav-tabs mb-3">
        {tabs.map((tab) => (
          <li key={tab} className="nav-item">
            <a
              className={`nav-link ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
              href="#!"
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
      <div className="d-flex flex-wrap">
        {groups.map((group, index) => (
          <GroupCard
            key={index}
            name={group.name}
            type={group.type}
            members={group.members}
            imageSrc={group.imageSrc}
          />
        ))}
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-light">Ver todo</button>
      </div>
    </div>
  );
};
