import { RouteObject, useRoutes } from "react-router-dom";
import router, { AppRoute } from "../router";
import { getUserMenus } from "@/utils/menu";
import { treeToList } from "@/utils/tree";

export default function DynamicRouter() {

  const userMenus = treeToList(getUserMenus()).map(x => x.key);

  /**
   * 
   * @param routes 应用全部的路由集合
   * @param userRoutes 用户路由集合
   * @returns 
   */
  const routesFilter = (routes: AppRoute[], userRoutes: AppRoute[] = []): AppRoute[] => {

    for (const route of routes) {
      if (route.isAuth && !userMenus.includes(route.fullPath)) {
        continue;
      }

      if (!route.children) {
        userRoutes.push(route);
      } else {
        const nowRoute: AppRoute = { ...route, children: [] }
        userRoutes.push(nowRoute);

        routesFilter(route.children, nowRoute.children)
      }
    }

    return userRoutes;
  };

  return useRoutes(routesFilter(router) as RouteObject[]);
}