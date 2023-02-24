<<<<<<< HEAD
import { HashRouter, useRoutes } from "react-router-dom";
import { BaseRouters } from "./modules/base";
const routerList:AppRouteRaw[] = [];
routerList.push(BaseRouters)

const WrapperRoutes = ()=> useRoutes(routerList)
const AppRouter = ()=>{
  return (
    <HashRouter>
     <WrapperRoutes />
    </HashRouter>
  )
}
export default AppRouter;
=======
import { HashRouter, useRoutes } from 'react-router-dom'
import { BaseRouters } from './modules/base'
const routerList: AppRouteRaw[] = []
routerList.push(BaseRouters)

const WrapperRoutes = () => useRoutes(routerList)
const AppRouter = () => {
  return (
    <HashRouter>
      <WrapperRoutes />
    </HashRouter>
  )
}
export default AppRouter
>>>>>>> 4a7b81305d2cc1585d8cb16488b48df677ad39c5
