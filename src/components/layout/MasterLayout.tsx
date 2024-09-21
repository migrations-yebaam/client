import {FC, useEffect} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import {AsideDefault} from './components/aside/AsideDefault'
import {Sidebar} from './components/sidebar/Sidebar'
import {Footer} from './components/Footer'
import {HeaderWrapper} from './components/header/HeaderWrapper'
import {PageDataProvider, useLayout} from './core'
import {DrawerMessenger} from '../partials'
import {
    DrawerComponent,
    MenuComponent,
    ScrollComponent,
    ScrollTopComponent,
    SwapperComponent,
    ToggleComponent
} from '../assets/ts/components'
import clsx from 'clsx'
import {WithChildren} from '../helpers'
import { DashboardWrapper } from '../../features/pages/dashboard/DashboardWrapper'

const MasterLayout: FC<WithChildren> = () => {
  const {classes} = useLayout()
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
        ToggleComponent.reinitialization();
        ScrollTopComponent.reinitialization();
        DrawerComponent.reinitialization();
        MenuComponent.reinitialization();
        ScrollComponent.reinitialization();
        SwapperComponent.reinitialization();
    }, 500)
  }, [location.key])

  return (
    <PageDataProvider>
      <div className='page d-flex flex-column flex-column-fluid'>

        <div
          id='kt_content_container'
          className={clsx(
            'd-flex flex-column-fluid align-items-stretch',
            classes.contentContainer.join(' ')
          )}
        >
          <AsideDefault />

          <div className='wrapper d-flex flex-column flex-row-fluid mt-5 mt-lg-10' id='kt_wrapper'>
            <div className='flex-column-fluid' id='kt_content'>
              <div className='post' id='kt_post'>
                {/* <Outlet /> */}
              <DashboardWrapper />
              </div>
            </div>
            <Footer />
          </div>

          <Sidebar />
        </div>
      </div>

      {/* begin:: Drawers */}
    
      <DrawerMessenger />
      {/* end:: Drawers */}

      {/* end:: Modals */}
      {/* <ScrollTop /> */}
    </PageDataProvider>
  )
}

export {MasterLayout}
