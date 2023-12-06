import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Layout, Menu, MenuProps } from 'antd';
import { addIconToMenu } from "@/apis/menu";

import './index.less'
import { getUserMenus } from '@/utils/menu';

const { Sider } = Layout;

function AppLayoutSidebar({ collapsed }: any) {

  const navigate = useNavigate();

  const [menus, setMenus] = useState<MenuItem[]>([]);

  useEffect(() => {
    const userMenus = getUserMenus();
    setMenus(addIconToMenu(userMenus));
  }, []);

  const menuClick = (e: any) => {
    navigate(e.key)
  }

  type MenuItem = Required<MenuProps>['items'][number];

  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed} className={collapsed ? "app-sider-collapsed" : "app-sider-un-collapsed"}>
        <div className={collapsed ? "app-sider-logo app-sider-collapse" : "app-sider-logo"}>
          <a>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo" />
            <h1>Ant Design Pro</h1>
          </a>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/']}
          items={menus}
          onClick={menuClick}
        />
      </Sider>
    </>
  )
}

export default AppLayoutSidebar