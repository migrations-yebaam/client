import React, { useState } from 'react';
import { EventCard } from './EventCard';

export const EventsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Pasados');

  const tabs = ['Pasados', 'Futuros'];
  const events = [
    {
      date: 'JUE, 10 FEB. 2022',
      title: 'Cambio Unilateral de modelo de contratos al personal de salud de Neiva Huila',
      description: 'Evento de SOS Movimiento por la Vida',
      imageSrc: 'link-to-image1.jpg',
    },
    {
      date: 'SÁB, 11 DIC. 2021',
      title: 'Apertura Xiaomi Store CC Los Molinos Medellín',
      description: 'Evento de Xiaomi Colombia',
      imageSrc: 'link-to-image2.jpg',
    },
    {
      date: 'JUE, 27 ENE. 2022',
      title: 'Aprende cómo ayudar a tu bebé a conciliar el sueño en las noches',
      description: 'Evento de JOHNSON\'S baby',
      imageSrc: 'link-to-image3.jpg',
    },
  ];

  return (
    <div className="events-section mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">Eventos</h5>
        <div>
          <button className="btn btn-primary me-2">Crear evento</button>
          <button className="btn btn-light">
            <i className="bi bi-three-dots"></i>
          </button>
        </div>
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
        {events.map((event, index) => (
          <EventCard
            key={index}
            date={event.date}
            title={event.title}
            description={event.description}
            imageSrc={event.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};
