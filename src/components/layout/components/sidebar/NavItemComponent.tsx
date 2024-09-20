import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
  title: string;
  icon: string;
  route: string;
}

export const NavItemComponent: React.FC<NavItemProps> = ({ title, icon, route }) => {
  return (
    <div className="menu-item">
      <NavLink to={route} className="menu-link d-flex align-items-center">
        <i className={`bi ${icon} me-3`}></i>
        <span className="menu-title">{title}</span>
      </NavLink>
    </div>
  );
};
