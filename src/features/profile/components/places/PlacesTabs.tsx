import React, { useState } from 'react';
import { PlaceItem } from './PlaceItem';

export const PlacesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Recientes');

  const tabs = ['Recientes', 'Guardados'];

  const places = [
    {
      id: 1,
      name: 'Medellín',
      location: 'Antioquia, Colombia',
      visitedDate: 'Visitado el 20 de septiembre de 2023',
      imageUrl: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      name: 'CC Nuestro Urabá',
      location: 'Apartadó',
      visitedDate: 'Visitado el 10 de noviembre de 2016',
      imageUrl: 'https://via.placeholder.com/50',
    },
    {
      id: 3,
      name: 'Radio Deejay',
      location: 'Milán',
      visitedDate: 'Visitado el 30 de abril de 2015',
      imageUrl: 'https://via.placeholder.com/50',
    },
    {
      id: 4,
      name: 'Pereira',
      location: 'Risaralda, Colombia',
      visitedDate: 'Visitado el 21 de febrero de 2015',
      imageUrl: 'https://via.placeholder.com/50',
    },
  ];

  return (
    <div className="places-tabs mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Lugares visitados</h5>
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
      <div className="list-group">
        {places.map((place) => (
          <PlaceItem
            key={place.id}
            name={place.name}
            location={place.location}
            visitedDate={place.visitedDate}
            imageUrl={place.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
