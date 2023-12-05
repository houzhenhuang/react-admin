import { useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Layout, theme, MenuProps, Space, Dropdown, Avatar } from 'antd';
import './index.scss'
import { removeToken } from "../../../../utils/token";

const { Header } = Layout;
function AppLayoutHeader(props: { collapsed: boolean, setCollapsed: Function }) {

  const { collapsed, setCollapsed } = props;

  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const logout = () => {
    removeToken();
    navigate("/login");
  }

  const accountMenus: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          个人中心
        </a>
      ),
      icon: <UserOutlined />
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          个人设置
        </a>
      ),
      icon: <SettingOutlined />
    },
    {
      type: 'divider',
    },
    {
      key: '3',
      label: (
        <a rel="noopener noreferrer" onClick={logout}>
          退出登录
        </a>
      ),
      icon: <LogoutOutlined />
    },
  ];


  return (
    <>
      <Header style={{ padding: 0, background: colorBgContainer }} className="app-layout-header">
        <Space
          className="menu-fold"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Space>
        <div className="app-layout-header-info">
          <Space className="app-layout-header-right">
            <span className="app-layout-header-right-account">
              <Dropdown menu={{ items: accountMenus }} placement="bottomRight">
                <div>
                  <Avatar size="small" src={<img src={"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"} alt="avatar" />} />
                  <span className="anticon">Serati Ma</span>
                </div>
              </Dropdown>
            </span>

            {/* <Dropdown menu={{ items: accountMenus }} placement="bottomRight">
                <span className="globalization">
                  <i className="anticon">
                    <svg viewBox="0 0 24 24" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                      <path d="M0 0h24v24H0z" fill="none">
                      </path><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " className="css-c4d79v">
                      </path>
                    </svg>
                  </i>
                </span>
              </Dropdown> */}
          </Space>
        </div>
      </Header>
    </>
  )
}

export default AppLayoutHeader