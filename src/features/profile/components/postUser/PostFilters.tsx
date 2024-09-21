import React from 'react';

export const PostFilters: React.FC = () => {
  return (
    <div className="post-filters mb-4 d-flex justify-content-between align-items-center">
      <div>
        <button className="btn btn-light me-2"><i className="bi bi-filter"></i> Filtros</button>
        <button className="btn btn-light"><i className="bi bi-gear-fill"></i> Administrar publicaciones</button>
      </div>
      <div>
        <button className="btn btn-light me-2">Vista de lista</button>
        <button className="btn btn-light">Vista de cuadrícula</button>
      </div>
    </div>
  );
};
