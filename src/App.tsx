import React from 'react';
import './App.less';
import { BrowserRouter } from 'react-router-dom';
import DynamicRouter from './components/DynamicRouter';
import { ConfigProvider } from 'antd';
import Loading from './components/Loading';

function App() {
  return (
    <>
      <React.Suspense fallback={<Loading />}>
        <BrowserRouter>
          <ConfigProvider
            theme={{
              token: {
                // Seed Token，影响范围大
                // colorPrimary: styles.colorBgContainer,
                // borderRadius: 0,

                // 派生变量，影响范围小
                // colorBgContainer: '#f6ffed',
              },
            }}
          >
            <DynamicRouter></DynamicRouter>
          </ConfigProvider>
        </BrowserRouter>
      </React.Suspense>
    </>
  );
}

export default App;
