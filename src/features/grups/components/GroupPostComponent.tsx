// GroupPostComponent.tsx
import React from 'react';
import { GroupPostActionsComponent } from './GroupPostActionsComponent';

export const GroupPostComponent: React.FC = () => {
  return (
    <div className="group-post card mb-3">
      <div className="card-body">
        <h5>EnganchaTIC - Ministerio TIC Colombia</h5>
        <p>El contenido no está disponible en este momento...</p>
        <GroupPostActionsComponent />
      </div>
    </div>
  );
};
