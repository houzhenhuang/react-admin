import React from 'react';
import './App.css';
import Layout from './pages/Layout';
import { BrowserRouter } from 'react-router-dom';
import DynamicRouter from './components/DynamicRouter';

function App() {
  return (
    <>
      <React.Suspense>
        <BrowserRouter>
          <DynamicRouter></DynamicRouter>
        </BrowserRouter>
      </React.Suspense>
    </>
  );
}

export default App;
