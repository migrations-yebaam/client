import { FC, ReactNode, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import AppPage from './features/AppPage';

import Home from './features/home/components/Home';
import ProtectedRoute from './features/ProtectedRoute';
import UserProfilePage from './features/user/UserProfilePage';
import ProfilePage from './features/profile/ProfilePage';
import TermsAndConditionsPage from './features/index/pages/TermsAndConditionsPage';
import PrivacyPolicyPage from './features/index/pages/PrivacyPolicyPage';


// const Layout = ({ backgroundColor = '#fff', children }: { backgroundColor: string; children: ReactNode }): JSX.Element => (
//   <div style={{ backgroundColor }} className="flex flex-grow">
//     {children}
//   </div>
// );
const AppRouter: FC = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <AppPage />
    },
    {
      path: '/terminos-y-condiciones',
      element: <TermsAndConditionsPage />
    },
    {
      path: '/politica-de-privacidad',
      element: <PrivacyPolicyPage />
    },




    {
      path: '/',
      element: (
        <Suspense>
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        </Suspense>
      )
    },
    {
      path: '/:username/:id',  
      element: <ProfilePage />,  
    }

  ];

  return useRoutes(routes);
};

export default AppRouter;
