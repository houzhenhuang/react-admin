import { Button, Checkbox, Form, Input, message } from 'antd'
import { doLogin } from '@/apis/login';
import './login.less';
import { setToken } from '@/utils/token';
import { useNavigate } from "react-router-dom";
import { getMenus, UserMenu } from '@/apis/menu';
import { setUserMenus } from '@/utils/menu';

import loginBgVideo from "@/assets/videos/login-bg-video.mp4";

const Login: React.FC = () => {
    const navigate = useNavigate();

    const login = async (loginRequest: LoginRequest) => {
        const res = await doLogin(loginRequest);
        if (res.isSuccess) {
            setToken(res.data.token);

            const menus: UserMenu[] = await getMenus();
            setUserMenus(menus);
            navigate("/");
        } else {
            message.error(res.message);
        }
    };

    return (
        <>
            <div className='login-body'>
                <div className='login-container'>
                    <div className='login-video'>
                        {/* <video src={loginBgVideo} muted autoPlay loop></video> */}
                    </div>
                    <div className='login-box'>
                        <div className="logo">
                            <h1>天马行空内容管理系统</h1>
                            <h2>TMXK GUAN LI XI TONG</h2>
                        </div>
                        <div className="title">
                            用户登录
                        </div>

                        <div className="input">
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    username: "curitis", password: "123456", remember: true
                                }}
                                onFinish={login}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: '请输入你的用户名!' }]}
                                    className='username'
                                >
                                    <Input placeholder="用户名" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: '请输入你的密码!' }]}
                                    className='password'
                                >
                                    <Input
                                        type="password"
                                        placeholder="密码"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <div className='password-remmember-forgot'>
                                        <Form.Item name="remember" valuePropName="checked" noStyle className='remember'>
                                            <Checkbox>记住密码</Checkbox>
                                        </Form.Item>

                                        <a className="login-form-forgot" href="">
                                            忘记密码？
                                        </a>
                                    </div>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button" block>
                                        登录
                                    </Button>
                                </Form.Item>
                            </Form >
                        </div>
                        <div className='login-box-footer'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login