import { Outlet } from "react-router-dom";
import { Layout, theme } from 'antd';
import './index.scss'
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const { Content } = Layout;
function AppLayout() {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="app-layout">
      <Sidebar collapsed={false} />
      <Layout>
        <Header />
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