import React, { useState } from 'react';

export const SportsTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Equipos deportivos');

  const tabs = ['Equipos deportivos', 'Deportistas'];

  return (
    <div className="sports-tabs mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Deportes</h5>
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
      <div className="text-center text-muted mt-3">
        {activeTab === 'Equipos deportivos'
          ? 'No has añadido equipos deportivos.'
          : 'No has añadido deportistas.'}
      </div>
    </div>
  );
};
