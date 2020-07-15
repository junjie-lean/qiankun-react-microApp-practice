import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// 导入qiankun所需方法
import {
  registerMicroApps, // 注册子应用
  runAfterFirstMounted, // 当地一个子应用装载完毕
  setDefaultMountApp, // 设置默认装载的子应用
  initGlobalState, // 微前端之间的通信
  start, // 启动
} from "qiankun";

window.__POWERED_BY_QIANKUN__ = true;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("container")
);

//注册子应用
// registerMicroApps(
//   [
//     {
//       name: "s3000",
//       entry: "//localhost:3000",
//       container: "#p3000",
//       activeRule: "/s3000",
//     },
//     {
//       name: "s4000",
//       entry: "//localhost:4000",
//       container: "#p4000",
//       activeRule: "/s4000",
//     },
//   ],
//   {
//     beforeLoad: [
//       (app) => {
//         console.log(`生命周期:${app} beforeLoad`);
//       },
//     ],
//     beforeMount: [
//       (app) => {
//         console.log("beforeMount");
//       },
//     ],
//     beforeUnmount: [
//       (app) => {
//         console.log("beforeUnmount");
//       },
//     ],
//     afterUnmount: [
//       (app) => {
//         console.log("afterUnmount");
//       },
//     ],
//   }
// );

// setDefaultMountApp("/s3000");

// // 第一个子应用加载完毕后回调
// runAfterFirstMounted(() => {
//   console.log("第一个子应用加载完毕后的回调");
// });

// // 启动qiankun
// start({ singular: false });
