import React from 'react';

const ProfileTabs: React.FC = ({ onSelectedNav, currentSelectedNav }) => {
  const listClass = `nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap`;
  const navItems = [ 
    'Publicaciones',
    'Información',
    'Amigositem',
    'Fotos',
    'Videos',
  ];

  return (
    <div className='d-flex overflow-auto h-55px'>
      <ul className={listClass}>
        {navItems.map((item) => (
        <li className='nav-item'>
        <a onClick={() => onSelectedNav(item)}
              className={`nav-link text-active-primary me-6 ${item === currentSelectedNav && 'active'}`}>
                {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ProfileTabs };
