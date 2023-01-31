import Home from '@/pages/home'
import Layout from '@/layout/Layout'
export const BaseRouters: AppRouteRaw = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: 'home',
      element: <Home />
    }
  ]
}
