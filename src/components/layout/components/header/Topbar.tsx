import clsx from 'clsx'
import {FC} from 'react'
import {KTIcon} from '../../../helpers'
import {
  HeaderUserMenu,
  Search,
  ThemeModeSwitcher,
} from '../../../partials'

const toolbarButtonMarginClass = 'ms-1 ms-lg-3',
  toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px',
  toolbarButtonIconSizeClass = 'fs-1'

const Topbar: FC = () => {

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

   

        {/* Quick links */}
        <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
          {/* begin::Menu wrapper */}
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
            <KTIcon iconName='element-11' className={toolbarButtonIconSizeClass} />
          </div>
          {/* end::Menu wrapper */}
        </div>

        {/* begin::Theme mode */}
        <div className={'d-flex align-items-center ms-lg-5'}>
          <ThemeModeSwitcher toggleBtnClass='btn btn-active-light d-flex align-items-center bg-hover-light py-2 px-2 px-md-3' />
        </div>
        {/* end::Theme mode */}

        {/* begin::User */}
        <div className='d-flex align-items-center ms-lg-5'>
      
          <HeaderUserMenu />
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

       
{/* <HeaderUserMenu /> */}
