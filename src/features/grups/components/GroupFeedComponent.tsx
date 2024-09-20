// GroupFeedComponent.tsx
import React from 'react';

export const GroupFeedComponent: React.FC = () => {
  return (
    <div className="group-feed">
      <ul>
        <li><a href="#!">Tu feed</a></li>
        <li><a href="#!">Descubrir</a></li>
        <li><a href="#!">Tus grupos</a></li>
      </ul>
      <button className="btn btn-primary mt-3">Crear nuevo grupo</button>
    </div>
  );
};
