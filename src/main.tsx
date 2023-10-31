// import React from 'react';
import ReactDOM from 'react-dom/client';
/** 全局引入 reset-css在最顶部，以便于其他样式覆盖默认样式  */
import 'reset-css';
/** 引入UI库样式 */

/** 引入全局样式 */
import '@/assets/styles/global.scss';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
// import App from './router/old'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // {/* </React.StrictMode> */}
);
