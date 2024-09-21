// GroupPostActionsComponent.tsx
import React from 'react';

export const GroupPostActionsComponent: React.FC = () => {
  return (
    <div className="group-post-actions d-flex">
      <button className="btn btn-link">Me gusta</button>
      <button className="btn btn-link">Comentar</button>
      <button className="btn btn-link">Enviar</button>
    </div>
  );
};
