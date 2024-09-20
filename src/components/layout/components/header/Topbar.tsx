import clsx from 'clsx'
import React, {FC} from 'react'
import {KTIcon} from '../../../helpers'
import {
  HeaderNotificationsMenu,
  HeaderUserMenu,
  Search,
  ThemeModeSwitcher,
} from '../../../partials'
import { UserModel } from '../../../../features/auth'

const toolbarButtonMarginClass = 'ms-1 ms-lg-3',
  toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px',
  toolbarButtonIconSizeClass = 'fs-1'
  
interface TopbarProps {
  currentUser: UserModel; 
  logout: () => void;
}

const Topbar: FC<TopbarProps> = ({currentUser, logout}) => {

  return (
    <div className='d-flex align-items-stretch flex-shrink-0'>
      <div className='topbar d-flex align-items-stretch flex-shrink-0'>
        {/* Search */}
        <div className={clsx('d-flex align-items-stretch', toolbarButtonMarginClass)}>
          <Search />
        </div>
        
        {/* CHAT */}
        <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
          {/* begin::Menu wrapper */}
          <div
            className={clsx(
              'btn btn-icon btn-active-light-primary btn-custom position-relative',
              toolbarButtonHeightClass
            )}
            id='kt_drawer_chat_toggle'
          >
            <KTIcon iconName='message-text-2' className={toolbarButtonIconSizeClass} />

            <span className='bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink'></span>
          </div>
          {/* end::Menu wrapper */}
        </div>

        {/* NOTIFICATIONS */}
        <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
          {/* begin::Menu- wrapper */}
          <div
            className={clsx(
              'btn btn-icon btn-active-light-primary btn-custom',
              toolbarButtonHeightClass
            )}
            data-kt-menu-trigger='click'
            data-kt-menu-attach='parent'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='bottom'
          >
            <KTIcon iconName='abstract-36' className={toolbarButtonIconSizeClass} />
          </div>
          <HeaderNotificationsMenu />
          {/* end::Menu wrapper */}
        </div>

    
        {/* begin::Theme mode */}
        <div className={'d-flex align-items-center ms-lg-5'}>
          <ThemeModeSwitcher toggleBtnClass='btn btn-active-light d-flex align-items-center bg-hover-light py-2 px-2 px-md-3' />
        </div>
        {/* end::Theme mode */}

        {/* begin::User */}
        <div className='d-flex align-items-center ms-lg-5' id='kt_header_user_menu_toggle'>
          <div
            className='btn btn-active-light d-flex align-items-center bg-hover-light py-2 px-2 px-md-3'
            data-kt-menu-trigger='click'
            data-kt-menu-attach='parent'
            data-kt-menu-placement='bottom-end'
          >
            <div className='d-none d-md-flex flex-column align-items-end justify-content-center me-2'>
              <span className='text-muted fs-7 fw-bold lh-1 mb-2'>Hello</span>
              <span className='text-gray-900 fs-base fw-bolder lh-1'>{currentUser?.first_name}</span>
              <span className='text-gray-900 fs-base fw-bolder lh-1'>{currentUser?.last_name}</span>
            </div>

            <div className='symbol symbol-30px symbol-md-40px'>
              <img src={currentUser?.pic} alt='avatar' />
            </div>
          </div>
          <HeaderUserMenu currentUser={currentUser}  logout={logout}/>
        </div>
        {/* end::User */}

        {/* Header menu toggle */}
        <div className='d-flex d-lg-none align-items-center me-n2' title='Show header menu'>
          <button
            className='btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px'
            id='kt_header_menu_mobile_toggle'
          >
            <KTIcon iconName='text-align-left' className='fs-1' />
          </button>
        </div>
      </div>
    </div>
  )
}

export {Topbar}
