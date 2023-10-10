import { useEffect } from 'react';
import { useRoutes, useNavigate, useLocation } from 'react-router-dom';
import type { NavigateFunction, Location } from 'react-router-dom';

import { deepCopy } from '@/utils/object';

interface BeforeEach {
  (to: AppRouteRaw, from: AppRouteRaw, next?: (path?: string) => void): any;
}
type createRouterOption = {
  routerArr: AppRouteRaw[];
  beforeEach: BeforeEach;
};

export const createRouter = (config: createRouterOption) => {
  const router = useRoutes(config.routerArr);
  //3.基于useEffect监听页面路由改变。然后组件重新加载，又重新校验权限。
  const navigate = useNavigate();
  const location = useLocation();

  const beforeEach = (navigate: NavigateFunction, _location: Location) => {
    // const res = findRouter(location.pathname, config.routerArr)
    // console
    console.log(_location);
    navigate('/home');
  };

  useEffect(() => {
    beforeEach(navigate, location);
  }, [navigate, location]);

  return router;
};

type findRouterResult = {
  router: AppRouteRaw | undefined;
  tree: AppRouteRaw[];
};
/**
 *
 * @param path 需要查找的路径
 * @param routerArr 路由
 * @returns 返回对应路由或空
 */
export function findRouter(
  path: string,
  routerArr: AppRouteRaw[]
): findRouterResult | null {
  // 判断path是否存在
  if (!path) {
    return null;
  }
  // 分割 path
  if (typeof path !== 'string') {
    throw new Error(`无效路由 ${JSON.stringify(path)}`);
  }
  const pathArr =
    path === '/' ? ['/'] : path.split('/').filter((item) => item !== '');
  // 结果集
  const result: findRouterResult = {
    router: undefined,
    tree: [] as AppRouteRaw[]
  };
  const routerArrCopy = deepCopy(routerArr);

  for (const item of pathArr) {
    const find = findRouterTree(item, routerArrCopy);
    if (!find) return null;
    result.tree.push(find);
  }
  result.router = result.tree[result.tree.length - 1];
  return result;
}

// 获取指定路径的信息
const findRouterTree = (
  path: string,
  routerArr: AppRouteRaw[]
): AppRouteRaw | null => {
  for (const router of routerArr) {
    if (router.path === path) {
      return router;
    }
    if (router.children) {
      const find = findRouterTree(path, router.children);
      if (find) return find;
    }
  }
  return null;
};
