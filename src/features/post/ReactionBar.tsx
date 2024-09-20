import React from 'react';

const ReactionBar: React.FC = () => {
  return (
    <div className="reaction-bar d-flex justify-content-between">
      <button className="btn btn-link">
        <i className="fas fa-thumbs-up"></i> Me gusta
      </button>
      <button className="btn btn-link">
        <i className="fas fa-comment"></i> Comentar
      </button>
      <button className="btn btn-link">
        <i className="fas fa-share"></i> Enviar
      </button>
    </div>
  );
};

export default ReactionBar;
