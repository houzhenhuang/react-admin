const USER_MENUS_KEY = "user_menus";

function setUserMenus(menus: any[]) {
  localStorage.setItem(USER_MENUS_KEY, JSON.stringify(menus))
}

function getUserMenus(): any[] {

  const userMenus = localStorage.getItem(USER_MENUS_KEY);
  if (!userMenus) {
    return [];
  }
  return JSON.parse(userMenus) as []
}

function removeUserMenus() {
  localStorage.removeItem(USER_MENUS_KEY)
}

export {
  setUserMenus,
  getUserMenus,
  removeUserMenus
};