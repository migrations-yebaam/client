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
              (location.pathname === '/crafted/pages/profile/overview' && 'active')
            }
            to='/crafted/pages/profile/posts'
          >
            Publicaciones
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-6 ` +
              (location.pathname === '/crafted/pages/profile/info-profile' && 'active')
            }
            to='/crafted/pages/profile/info-profile'
          >
            Información
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-6 ` +
              (location.pathname === '/crafted/pages/profile/friends' && 'active')
            }
            to='/crafted/pages/profile/friends'
          >
            Amigos
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-6 ` +
              (location.pathname === '/crafted/pages/profile/photos' && 'active')
            }
            to='/crafted/pages/profile/photos'
          >
            Fotos
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-6 ` +
              (location.pathname === '/crafted/pages/profile/videos' && 'active')
            }
            to='/crafted/pages/profile/videos'
          >
            Videos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { ProfileTabs };
