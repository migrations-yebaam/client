import { FC, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import AppPage from './features/AppPage';

import Home from './features/home/components/Home';
import ProtectedRoute from './features/ProtectedRoute';



const AppRouter: FC = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <AppPage />
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
    }

    // {
    //   path: '/:username/:user/edit',
    //   element: (
    //     <Suspense>
    //       <ProtectedRoute>
    //         <Layout backgroundColor="#ffffff">
    //           <CurrentSellerProfile />
    //         </Layout>
    //       </ProtectedRoute>
    //     </Suspense>
    //   )
    // },
    // {
    //   path: '/user/:username/view',
    //   element: (
    //     <Suspense>
    //       <ProtectedRoute>
    //         <Layout backgroundColor="#ffffff">
    //           <SellerProfile />
    //         </Layout>
    //       </ProtectedRoute>
    //     </Suspense>
    //   )
    // },
    // {
    //   path: '/:username/:user',
    //   element: (
    //     <Suspense>
    //       <ProtectedRoute>
    //         <Layout backgroundColor="#ffffff">
    //           <Seller />
    //         </Layout>
    //       </ProtectedRoute>
    //     </Suspense>
    //   ),
    //   children: [
    //     {
    //       path: 'user_dashboard',
    //       element: <SellerDashboard />
    //     },
    //     {
    //       path: 'manage_config',
    //       element: <ManageOrders />
    //     }
    //   ]
    // },
    // {
    //   path: '/create/new/:postId',
    //   element: (
    //     <Suspense>
    //       <ProtectedRoute>
    //         <Layout backgroundColor="#ffffff">
    //           <AddGig />
    //         </Layout>
    //       </ProtectedRoute>
    //     </Suspense>
    //   )
    // },
    // {
    //   path: '/post/edit/:postId',
    //   element: (
    //     <Suspense>
    //       <ProtectedRoute>
    //         <Layout backgroundColor="#ffffff">
    //           <EditGig />
    //         </Layout>
    //       </ProtectedRoute>
    //     </Suspense>
    //   )
    // },
    // {
    //   path: '/post/:username/:title/:postId/view',
    //   element: (
    //     <Suspense>
    //       <ProtectedRoute>
    //         <Layout backgroundColor="#ffffff">
    //           <GigView />
    //         </Layout>
    //       </ProtectedRoute>
    //     </Suspense>
    //   )
    // },
    // {
    //   path: '/categories/:category',
    //   element: (
    //     <Suspense>
    //       <ProtectedRoute>
    //         <Layout backgroundColor="#ffffff">
    //           <Gigs type="categories" />
    //         </Layout>
    //       </ProtectedRoute>
    //     </Suspense>
    //   )
    // },
    // {
    //   path: '/search/user',
    //   element: (
    //     <Suspense>
    //       <ProtectedRoute>
    //         <Layout backgroundColor="#ffffff">
    //           <Gigs type="search" />
    //         </Layout>
    //       </ProtectedRoute>
    //     </Suspense>
    //   )
    // },
    // {
    //   path: '/inbox',
    //   element: (
    //     <Suspense>
    //       <ProtectedRoute>
    //         <Layout backgroundColor="#ffffff">
    //           <Chat />
    //         </Layout>
    //       </ProtectedRoute>
    //     </Suspense>
    //   )
    // },
    // {
    //   path: '/inbox/:username/:conversationId',
    //   element: (
    //     <Suspense>
    //       <ProtectedRoute>
    //         <Layout backgroundColor="#ffffff">
    //           <Chat />
    //         </Layout>
    //       </ProtectedRoute>
    //     </Suspense>
    //   )
    // },
    // {
    //   path: '/:username/edit',
    //   element: (
    //     <Suspense>
    //       <ProtectedRoute>
    //         <Layout backgroundColor="#f5f5f5">
    //           <Settings />
    //         </Layout>
    //       </ProtectedRoute>
    //     </Suspense>
    //   )
    // },
    // {
    //   path: '*',
    //   element: (
    //     <Suspense>
    //       <Error />
    //     </Suspense>
    //   )
    // }
  ];

  return useRoutes(routes);
};

export default AppRouter;
