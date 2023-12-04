import React from 'react';
import { useNavigate } from "react-router-dom";
import { Layout, Menu, MenuProps } from 'antd';

import './index.scss'
import {
  UserOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

function AppLayoutSidebar(props: { collapsed: boolean }) {

  const { collapsed } = props;

  const navigate = useNavigate();

  const getMenuItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem => {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

  const menuClick = (e: any) => {
    navigate(e.key)
  }

  type MenuItem = Required<MenuProps>['items'][number];
  const menuItems: MenuItem[] = [
    getMenuItem('Home', '/', <PieChartOutlined />),
    getMenuItem('About', '/about', <DesktopOutlined />),
    getMenuItem('User', 'sub1', <UserOutlined />, [
      getMenuItem('Tom', '3'),
      getMenuItem('Bill', '4'),
      getMenuItem('Alex', '5'),
    ]),
    getMenuItem('Team', 'sub2', <TeamOutlined />, [getMenuItem('Team 1', '6'), getMenuItem('Team 2', '8')]),
    getMenuItem('Files', '9', <FileOutlined />),
  ];

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
          defaultSelectedKeys={['1']}
          items={menuItems}
          onClick={menuClick}
        />
      </Sider>
    </>
  )
}

export default AppLayoutSidebar