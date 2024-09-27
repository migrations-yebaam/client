import { FC, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import AppPage from './features/AppPage';

import Home from './features/home/components/Home';
import ProtectedRoute from './features/ProtectedRoute';
import ProfilePage from './features/profile/ProfilePage';
import TermsAndConditionsPage from './features/index/pages/TermsAndConditionsPage';
import PrivacyPolicyPage from './features/index/pages/PrivacyPolicyPage';


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
