import { HashRouter } from 'react-router-dom';

import { createRouter } from './createdRouter';
import { BaseRouters } from './modules/base';

const routerList: AppRouteRaw[] = [];
routerList.push(...BaseRouters);

const WrapperRoutes = () =>
  createRouter({
    routerArr: routerList,
    beforeEach: () => {}
  });
const AppRouter = () => {
  return (
    <HashRouter>
      <WrapperRoutes />
    </HashRouter>
  );
};
export default AppRouter;
