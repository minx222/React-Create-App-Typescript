<<<<<<< HEAD
import Home from "../../pages/home";
import Layout from "../../layout/Layout";
export const BaseRouters: AppRouteRaw = {

  path: "/",
  element: <Layout />,
  children:[
=======
import Home from '@/pages/home'
import Layout from '@/layout/Layout'
export const BaseRouters: AppRouteRaw = {
  path: '/',
  element: <Layout />,
  children: [
>>>>>>> 4a7b81305d2cc1585d8cb16488b48df677ad39c5
    {
      path: 'home',
      element: <Home />
    }
  ]
<<<<<<< HEAD
};
=======
}
>>>>>>> 4a7b81305d2cc1585d8cb16488b48df677ad39c5
