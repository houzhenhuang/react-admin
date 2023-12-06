import React from "react";
import * as Icons from '@ant-design/icons'
const iconList: any = Icons

export const getMenus = (): Promise<any[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          label: "Home",
          key: "/",
          icon: "PieChartOutlined"
        },
        {
          id: 2,
          label: "About",
          key: "/about",
          icon: "DesktopOutlined"
        },
        {
          id: 3,
          label: "User",
          key: "/user",
          icon: "UserOutlined",
          children: [
            // {
            //   label: "Tom",
            //   key: "/user/tom"
            // },
            {
              label: "Bill",
              key: "/user/bill"
            },
            {
              label: "Alex1",
              key: "/user/alex1",
              children: [
                {
                  label: "Bill1",
                  key: "/user/bill1"
                },
                {
                  label: "Alex1",
                  key: "/user/alex1"
                }
              ]
            }
          ]
        },
        {
          id: 4,
          label: "Team",
          key: "/sub2",
          icon: "TeamOutlined",
          children: [
            {
              label: "Team 1",
              key: "6"
            },
            {
              label: "Team 2",
              key: "8"
            }
          ]
        },
        {
          id: 5,
          label: "Files",
          key: "9",
          icon: "FileOutlined"
        }
      ]);
    }, 500);
  });
}

export const addIconToMenu = (menus: any[]): any[] => {

  for (let i = 0; 0 < menus.length; i++) {
    const menu = menus[i];
    if (!menu) {
      break;
    }

    if (menus[i].icon) {
      menus[i].icon = React.createElement(iconList[menus[i].icon])
    }

    if (menus[i].children) {
      menus[i].children = addIconToMenu(menus[i].children)
    }
  }

  return menus;
}