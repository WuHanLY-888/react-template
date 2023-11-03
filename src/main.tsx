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
// 状态管理
import store from '@/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
