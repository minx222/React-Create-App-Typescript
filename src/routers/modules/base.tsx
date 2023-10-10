import NOtFound from '@pages/404';
import Home from '@pages/home';

import Layout from '@/layout/Layout';
export const BaseRouters: AppRouteRaw[] = [
  {
    path: '/',
    element: <Layout />,
    redirectPath: '/home',
    children: [
      {
        path: 'home',
        element: <Home />
      }
    ]
  },
  {
    path: '*',
    redirect: true
  },
  {
    path: '/404',
    element: NOtFound
  }
];
