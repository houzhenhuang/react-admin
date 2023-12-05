import { useRoutes } from "react-router-dom";
import router from "../router";
import { getUserMenus } from "../utils/menu";

const routesFilter = (routes: any[], userMenus: any[]) => {
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    if (!route) {
      continue;
    }
    const temp: any[] = route.children;
    if (temp) {
      route.children = temp.filter(x => userMenus.findIndex(p => p.key == x.fullPath) > -1)
      routesFilter(route.children, userMenus)
    }
  }
};

const menusTreeToList = (menuTree: any[]) => {

  let menus: any[] = [];

  if (!menuTree) {
    return menus;
  }

  for (let i = 0; i < menuTree.length; i++) {
    const menu = menuTree[i];

    menus.push(menu)
    menus = menus.concat(...menusTreeToList(menu.children));
  }

  return menus;
}

export default function DynamicRouter() {

  const userMenus = getUserMenus();
  const menus = menusTreeToList(userMenus);

  routesFilter(router, menus);

  return useRoutes(router);
}