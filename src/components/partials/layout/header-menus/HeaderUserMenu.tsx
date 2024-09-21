import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { Languages } from './Languages';
import { useAppSelector } from '../../../../store/store';
import { IReduxState } from '../../../../store/store.interface';

const HeaderUserMenu: FC<any> = () => {
  const [showMenu, setShowMenu] = useState(false); 
  const authUser = useAppSelector((state: IReduxState) => state.authUser);
  console.log('authUser.authId',authUser.authId)
  console.log('authUser.uId',authUser.uId)
  console.log('authUser.uId',authUser.username)

  return (
    <Dropdown show={showMenu} onToggle={() => setShowMenu(!showMenu)}>
      <Dropdown.Toggle variant="light" id="dropdown-basic" onClick={() => setShowMenu(!showMenu)}>
        <div className='d-flex align-items-center'>
        <img 
        src="https://images.unsplash.com/photo-1723441857662-d465a52e78d0?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Profile" 
        className="rounded-circle me-2"
        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
      />
          <span > {authUser.username}</span>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'>
        <div className='menu-item px-3'>
          <div className='menu-content d-flex align-items-center px-3'>
            <div className='symbol symbol-50px me-5'>
              <img alt='Logo' src={'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D'} />
            </div>
            <div className='d-flex flex-column'>
              <div className='fw-bolder d-flex align-items-center fs-5'>
              <span > {authUser.username}</span>

                <span className='badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2'>{authUser.email}</span>
              </div>
              <span className='text-muted'>{authUser.email}</span>
            </div>
          </div>
        </div>

        <Dropdown.Divider />

        <div className='menu-item px-5'>
        <Link to={`/${authUser.username}/${authUser.uId}`} className='menu-link px-5'>
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
          <Link to='/' className='menu-link px-5'>
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
