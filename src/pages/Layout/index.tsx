import { Outlet } from "react-router-dom";
import { Layout, theme } from 'antd';
import './index.scss'
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useState } from "react";

const { Content } = Layout;
function AppLayout() {

  const {
    token: { colorBgContainer },
  } = theme.useToken();


  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="app-layout">
      <Sidebar collapsed={collapsed} />
      <Layout>
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout >
  )
}

export default AppLayout