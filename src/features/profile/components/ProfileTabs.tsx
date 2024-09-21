import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProfileTabs: React.FC = () => {
  const location = useLocation();

  return (
    <div className='d-flex overflow-auto h-55px'>
      <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-6 ` +
              (location.pathname === '/' && 'active')
            }
            to='/'
          >
            Publicaciones
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-6 ` +
              (location.pathname === '/' && 'active')
            }
            to='/'
          >
            Información
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-6 ` +
              (location.pathname === '/' && 'active')
            }
            to='/'
          >
            Amigos
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-6 ` +
              (location.pathname === '/' && 'active')
            }
            to='/'
          >
            Fotos
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-6 ` +
              (location.pathname === '/' && 'active')
            }
            to='/'
          >
            Videos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { ProfileTabs };
