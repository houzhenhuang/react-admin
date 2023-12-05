import { Button, Checkbox, Form, Input, message } from 'antd'
import { doLogin } from '../../api/login';
import './login.scss';
import { setToken } from '../../utils/token';
import { useNavigate } from "react-router-dom";
import { getMenus } from '../../api/menu';
import { setUserMenus } from '../../utils/menu';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const login = (loginRequest: LoginRequest) => {
        doLogin(loginRequest).then(res => {
            if (res.isSuccess) {
                setToken(res.data.token);

                getMenus().then(res => {
                    setUserMenus(res);
                    navigate("/");
                })
            } else {
                message.error(res.message);
            }
        });
    };

    return (
        <>
            <div className='login-body'>
                <div className='login-container'>
                    <div className='login-video'>
                        <video src="./login-bg-video.mp4" muted autoPlay loop></video>
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