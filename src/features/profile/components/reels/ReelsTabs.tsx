import React, { useState } from 'react';

export const ReelsTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Tus reels');

  const tabs = ['Tus reels', 'Reels guardados'];

  return (
    <div className="reels-tabs mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Reels</h5>
        <a href="#!" className="text-primary">Crear reel</a>
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
        Aún no creaste ningún reel.
      </div>
    </div>
  );
};
