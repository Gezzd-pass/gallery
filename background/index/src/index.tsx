import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store from "./store";
import "antd/dist/antd.css";
import "./index.css";
ReactDOM.render(
  //  中文包
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
