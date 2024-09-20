import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { Languages } from './Languages';
import { toAbsoluteUrl } from '../../../helpers';

const HeaderUserMenu: FC<any> = () => {
  const [showMenu, setShowMenu] = useState(false); 
  

  return (
    <Dropdown show={showMenu} onToggle={() => setShowMenu(!showMenu)}>
      <Dropdown.Toggle variant="light" id="dropdown-basic" onClick={() => setShowMenu(!showMenu)}>
        <div className='d-flex align-items-center'>
          <img
            src={toAbsoluteUrl('media/avatars/300-1.jpg')}
            alt="User Avatar"
            style={{ width: '40px', height: '40px', borderRadius: '50%' }}
          />
          <span className="ml-2">Hello Richard</span>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'>
        <div className='menu-item px-3'>
          <div className='menu-content d-flex align-items-center px-3'>
            <div className='symbol symbol-50px me-5'>
              <img alt='Logo' src={toAbsoluteUrl('media/avatars/300-1.jpg')} />
            </div>
            <div className='d-flex flex-column'>
              <div className='fw-bolder d-flex align-items-center fs-5'>
                Alvena Ward
                <span className='badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2'>Pro</span>
              </div>
              <span className='text-muted'>admin@demo.com</span>
            </div>
          </div>
        </div>

        <Dropdown.Divider />

        <div className='menu-item px-5'>
          <Link to='/crafted/pages/profile' className='menu-link px-5'>
            Mi cuenta
          </Link>
        </div>

        <div className='menu-item px-5'>
          <a href='#' className='menu-link px-5'>
            <span className='menu-text'>Mis páginas</span>
            <span className='menu-badge'>
              <span className='badge badge-light-danger badge-circle fw-bolder fs-7'>3</span>
            </span>
          </a>
        </div>

        <Dropdown.Divider />

        <div className='menu-item px-5'>
          <Link to='/crafted/pages/settings' className='menu-link px-5'>
            Centro de privacidad
          </Link>
        </div>

        <div className='menu-item px-5'>
          <a href='#' className='menu-link px-5'>
            Mi configuración
          </a>
        </div>

        <Dropdown.Divider />

        <Languages />

        <div className='menu-item px-5'>
          <a className='menu-link px-5'>Cerrar sesión</a>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export { HeaderUserMenu };
