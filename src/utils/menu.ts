import { UserMenu } from "@/apis/menu";

const USER_MENUS_KEY = "user_menus";

function setUserMenus(menus: UserMenu[]) {
  localStorage.setItem(USER_MENUS_KEY, JSON.stringify(menus))
}

function getUserMenus(): UserMenu[] {

  const userMenus = localStorage.getItem(USER_MENUS_KEY);
  if (!userMenus) {
    return [];
  }
  return JSON.parse(userMenus) as UserMenu[]
}

function removeUserMenus() {
  localStorage.removeItem(USER_MENUS_KEY)
}

export {
  setUserMenus,
  getUserMenus,
  removeUserMenus
};