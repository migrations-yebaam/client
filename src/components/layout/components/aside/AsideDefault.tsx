import { FC } from 'react';
import clsx from 'clsx';
import { useLayout } from '../../core';
import { SidebarComponent } from '../sidebar/SidebarComponent';

const AsideDefault: FC = () => {
  const { config, classes } = useLayout();
  const { aside } = config;

  return (
    <div
      id='kt_aside'
      className={clsx('aside', classes.aside.join(' '), { 'd-none': !aside.display })}
      data-kt-drawer='true'
      data-kt-drawer-name='aside'
      data-kt-drawer-activate='{default: true, lg: false}'
      data-kt-drawer-overlay='true'
      data-kt-drawer-width="{default:'200px', '300px': '225px'}"
      data-kt-drawer-direction='start'
      data-kt-drawer-toggle='#kt_aside_toggle'
    >
      <SidebarComponent />
      
    </div>
  );
}

export { AsideDefault };
