/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

const CoverUserPhoto: React.FC = () => {


  return (
    <div className="position-relative">
      <img
        src="https://images.unsplash.com/photo-1723647395168-d916159b78c9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Aquí debes poner el link a la foto de portada real.
        alt="Cover"
        className="img-fluid w-100"
        style={{ height: '300px', objectFit: 'cover', }} 
    
      />

    </div>
  );
};

export { CoverUserPhoto };
