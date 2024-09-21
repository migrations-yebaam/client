import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const ProfileUserTabs: React.FC = () => {
  const location = useLocation();
  const { id } = useParams<{ id: string }>(); // Obtener el ID del usuario de la URL

  return (
    <div className='d-flex overflow-auto h-55px'>
      <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-6 ` +
              (location.pathname === `/profile/${id}/` && 'active')
            }
            to={`/profile/${id}/`}
          >
            Publicaciones
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-6 ` +
              (location.pathname === `/profile/${id}/info` && 'active')
            }
            to={`/profile/${id}/info`}
          >
            Información
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-6 ` +
              (location.pathname === `/profile/${id}/friends` && 'active')
            }
            to={`/profile/${id}/friends`}
          >
            Amigos
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-6 ` +
              (location.pathname === `/profile/${id}/photos` && 'active')
            }
            to={`/profile/${id}/photos`}
          >
            Fotos
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-6 ` +
              (location.pathname === `/profile/${id}/videos` && 'active')
            }
            to={`/profile/${id}/videos`}
          >
            Videos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { ProfileUserTabs };
