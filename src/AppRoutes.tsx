import { FC, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import AppPage from './features/AppPage';

// import Home from './features/home/components/Home';
import ProtectedRoute from './features/ProtectedRoute';
import ProfilePage from './features/profile/ProfilePage';
import TermsAndConditionsPage from './features/index/pages/TermsAndConditionsPage';
import PrivacyPolicyPage from './features/index/pages/PrivacyPolicyPage';
import { MasterLayout } from './components/layout/MasterLayout';


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
            <MasterLayout />
          </ProtectedRoute>
        </Suspense>
      )
    },
    {
      path: '/user/:id',  
      element: (
        <Suspense>
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        </Suspense>
      ) 
    },
    {
      path: '/suggestion',  
      element: (
        <Suspense>
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        </Suspense>
      ) 
    }

  ];

  return useRoutes(routes);
};

export default AppRouter;
