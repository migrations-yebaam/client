import React, { useState } from 'react';

export const SeeMoreButtonComponent: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <button className="btn btn-link see-more-btn" onClick={() => setExpanded(!expanded)}>
      {expanded ? 'Ver menos' : 'Ver más'}
      <i className={`bi ${expanded ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
    </button>
  );
};
