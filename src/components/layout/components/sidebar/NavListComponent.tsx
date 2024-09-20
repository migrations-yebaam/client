/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';

export const NavListComponent: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="nav-list">
      {children}
    </div>
  );
};
