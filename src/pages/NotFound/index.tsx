import { Button, Result } from 'antd';
import React from 'react'
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/", { replace: true });
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="很抱歉，您访问的页面不存在。"
      extra={<Button type="primary" onClick={backHome}>Back Home</Button>}
    />
  )
};

export default NotFound;