import React, { useState } from 'react';

export const LikesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Todos los Me gusta');

  const tabs = [
    'Todos los Me gusta',
    'Películas',
    'Programas de TV',
    'Artistas',
    'Libros',
    'Equipos deportivos',
    'Deportistas',
    'Personas',
    'Restaurantes',
    'Más'
  ];

  const items = [
    { name: 'Software Crafters', imgSrc: 'https://plus.unsplash.com/premium_photo-1682145291930-43b73e27446e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Hospital Infantil CM', imgSrc: 'https://plus.unsplash.com/premium_photo-1682145291930-43b73e27446e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'CediMed S.A.S', imgSrc: 'https://plus.unsplash.com/premium_photo-1682145291930-43b73e27446e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    // Añadir más elementos según sea necesario
  ];

  return (
    <div className="likes-section mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Me gusta</h5>
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
        {items.map((item, index) => (
          <div key={index} className="p-2">
            <div className="card" style={{ width: '100px' }}>
              <img
                src={item.imgSrc}
                alt={item.name}
                className="card-img-top"
                style={{ width: '100%', height: '100px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <p className="card-text">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-light">Ver todo</button>
      </div>
    </div>
  );
};
