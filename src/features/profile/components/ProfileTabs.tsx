import React from 'react';

const ProfileTabs: React.FC<{ onSelectedNav: (item: string) => void, currentSelectedNav: string }> = ({ onSelectedNav, currentSelectedNav }) => {
  const listClass = `nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap`;
  const navItems = [
    'Publicaciones',
    'Información',
    'Amigos',
    'Fotos',
    'Videos',
  ];

  return (
    <div className='d-flex overflow-auto h-55px'>
      <ul className={listClass}>
        {navItems.map((item, index) => (
          <li key={index} className='nav-item'>  {/* Aquí agregamos la key única */}
            <a 
              onClick={() => onSelectedNav(item)}
              className={`nav-link text-active-primary me-6 ${item === currentSelectedNav && 'active'}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ProfileTabs };
