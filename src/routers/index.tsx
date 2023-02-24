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
