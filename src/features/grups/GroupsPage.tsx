import React, { useState } from 'react';
import styles from './GroupsPage.module.scss'; // Importamos el SCSS module
import { GroupCard } from './components/GroupCard';

const GroupsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Públicos');
  const tabs = ['Públicos'];
  const groups = [
    {
      name: 'CCNA, CCNP CERTIFICATION',
      type: 'Grupo público',
      members: '1,9 mil miembros',
      imageSrc: 'https://images.unsplash.com/photo-1720048170996-40507a45c720?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Arriendos en medellin sin inmobiliarias 100%',
      type: 'Grupo público',
      members: '94,4 mil miembros',
      imageSrc: 'https://images.unsplash.com/photo-1720048170996-40507a45c720?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Blockchain, NFT, Play2Earn, Web3, RWA, Real World Assets, Tokenisation',
      type: 'Grupo público',
      members: '18,8 mil miembros',
      imageSrc: 'https://images.unsplash.com/photo-1720048170996-40507a45c720?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    // Agrega más grupos según sea necesario
  ];

  return (
    <div className={styles.groupsSection}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Grupos</h5>
        <button className="btn btn-light">
          <i className="bi bi-three-dots"></i>
        </button>
      </div>
      <ul className={`nav nav-tabs mb-3 ${styles.navTabs}`}>
        {tabs.map((tab) => (
          <li key={tab} className={`nav-item ${styles.navItem}`}>
            <a
              className={`nav-link ${activeTab === tab ? 'active' : ''} ${styles.navLink}`}
              onClick={() => setActiveTab(tab)}
              href="#!"
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.groupsGrid}>
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

      <div className={`text-center mt-3 ${styles.textCenter}`}>
        <button className="btn btn-light">Ver todo</button>
      </div>
    </div>
  );
}

export default GroupsPage;
