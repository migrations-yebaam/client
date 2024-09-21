import { PageLink } from "../../components/layout/core";

export const profileSubmenu: Array<PageLink> = [
  {
    title: 'Overview',
    path: '/',
    isActive: true,
  },
  {
    title: 'Separator',
    path: '/',
    isActive: true,
    isSeparator: true,
  },
  {
    title: 'Account',
    path: '/account',
    isActive: false,
  },
  {
    title: 'Account',
    path: '/account',
    isActive: false,
    isSeparator: true,
  },
  {
    title: 'Settings',
    path: '/settings',
    isActive: false,
  },
  {
    title: 'Settings',
    path: '/settings',
    isActive: false,
    isSeparator: true,
  },
]
