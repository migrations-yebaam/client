import React from 'react'
import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {Overview} from './components/Overview'
import {Settings} from './components/settings/Settings'
import {AccountHeader} from './AccountHeader'
import { PageLink, PageTitle } from '../../components/layout/core'

const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Account',
    path: '/crafted/account/',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const AccountPage: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <AccountHeader />
            <Outlet />
          </>
        }
      >
        <Route
          path=''
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Overview</PageTitle>
              <Overview />
            </>
          }
        />
        <Route
          path='settings'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Settings</PageTitle>
              <Settings />
            </>
          }
        />
        <Route index element={<Navigate to='/crafted/account/' />} />
      </Route>
    </Routes>
  )
}

export default AccountPage
