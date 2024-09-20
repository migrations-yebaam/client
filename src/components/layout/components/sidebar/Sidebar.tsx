import React from 'react'
import clsx from 'clsx'
import {useLayout} from '../../core'
import Advertising from '../../../../features/advertising/Advertising'
import YourPages from '../../../../features/pages/yourPages/YourPages'
import Friend from '../../../../features/contact/Friend'

export function Sidebar() {
  const {classes} = useLayout()
  const sidebarCSSClass = classes.sidebar

  return (
    <div
      id='kt_sidebar'
      className={clsx('sidebar p-5 px-lg-0 py-lg-11', sidebarCSSClass.join(' '))}
      data-kt-drawer='true'
      data-kt-drawer-name='sidebar'
      data-kt-drawer-activate='{default: true, lg: false}'
      data-kt-drawer-overlay='true'
      data-kt-drawer-width='275px'
      data-kt-drawer-direction='end'
      data-kt-drawer-toggle='#kt_sidebar_toggle'
    >
      {/* SIDEBBAR */}
      
      <Advertising />
      <YourPages />
      <Friend />
    </div>
  )
}
