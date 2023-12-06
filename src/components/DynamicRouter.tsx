import { RouteObject, useRoutes } from "react-router-dom";
import router from "../router";
import { getUserMenus } from "@/utils/menu";
import { treeToList } from "@/utils/tree";

export default function DynamicRouter() {
  const userMenus = treeToList(getUserMenus()).map(x => x.key);

  const routesFilter = (routes: AppRoute[], userRoutes: AppRoute[] = []) => {

    for (const route of routes) {
      if (route.isAuth && !userMenus.includes(route.fullPath)) {
        continue;
      }

      if (!route.children) {
        userRoutes.push(route);
      }
      else {
        const nowRoute = { ...route, children: [] }
        userRoutes.push(nowRoute);

        routesFilter(route.children, nowRoute.children)
      }
    }

    return userRoutes;
  };

  return useRoutes(routesFilter(router) as RouteObject[]);
}