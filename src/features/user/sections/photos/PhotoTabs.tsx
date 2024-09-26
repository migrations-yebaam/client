import React, { useState } from 'react';
import { PhotoGrid } from './PhotoGrid';

export const PhotoTabs: React.FC = ({ photos }) => {
  const [activeTab, setActiveTab] = useState('Fotos');

  const tabs = ['Fotos', 'Álbumes'];
  return (
    <div className="photo-tabs mt-4">
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
      <PhotoGrid photos={photos} />
      <div className="text-center mt-3">
        <button className="btn btn-secondary">Ver todo</button>
      </div>
    </div>
  );
};
