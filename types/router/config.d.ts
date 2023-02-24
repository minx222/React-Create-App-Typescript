import {
  IndexRouteObject,
  NonIndexRouteObject,
  RouteObject,
} from "react-router-dom";
interface AppRouteRawIndex extends IndexRouteObject {
  path: string;
  name?: string;
  meta?: RouteMeta;
  index: true;
  children?: AppRouteRaw[];
  element?: Component;
}
interface AppRouteRawNoIndex extends NonIndexRouteObject {
  path: string;
  name?: string;
  meta?: RouteMeta;
  index?: false;
  children?: AppRouteRaw[];
  element?: Component;
}
export declare global {
  type AppRouteRaw = RouteObject;
}
