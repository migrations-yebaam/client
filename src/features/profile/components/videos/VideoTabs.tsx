import React, { useState } from 'react';
import { VideoGrid } from './VideoGrid';

export const VideoTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Tus videos');

  const tabs = ['Tus videos', 'Videos guardados', 'Videos en los que apareces'];

  const videos = [
    { src: 'https://via.placeholder.com/200', id: 1, duration: '49:14' },
    { src: 'https://via.placeholder.com/200', id: 2, duration: '21:38' },
    { src: 'https://via.placeholder.com/200', id: 3, duration: '0:45' },
    { src: 'https://via.placeholder.com/200', id: 4, duration: '1:19' },
    { src: 'https://via.placeholder.com/200', id: 5, duration: '6:25' },
    { src: 'https://via.placeholder.com/200', id: 6, duration: '22:04' },
  ];

  return (
    <div className="video-tabs mt-4">
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
      <VideoGrid videos={videos} />
      <div className="text-center mt-3">
        <button className="btn btn-secondary">Ver todo</button>
      </div>
    </div>
  );
};
