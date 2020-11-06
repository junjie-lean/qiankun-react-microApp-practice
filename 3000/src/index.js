/*
 * @Author: junjie.lean
 * @Date: 2020-01-09 14:17:37
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-05 14:31:03
 */

import "core-js";
import React from "react";
import ReactDOM from "react-dom";
import App from "./view/public/public-provider";
// import svgs from "!!raw-loader!./media/svg/symbol-defs.svg";
// document.title = "jf-web-app-hook";
// document.querySelector("#svg").innerHTML += svgs;

if (!window.__POWERED_BY_QIANKUN__) {
  render(<App />, DOM);
}

function render(props = {}) {
  ReactDOM.render(
    <App {...props} />,
    document.getElementById("microAppContainer3000")
  );
}

export async function bootstrap() {
  // console.log("作为子应用初始化的时候调用一次,后续不再调用!");
  console.log("3000 bootstrap");
}

/**
 * 应用每次进入都会调用 mount 方法，在这里触发应用的渲染方法
 */
export async function mount(props) {
  console.log("mount:3000");
  render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  ReactDOM.unmountComponentAtNode(
    document.getElementById("microAppContainer3000")
  );
  console.log("unmount:3000");
}

/**
 * 可选生命周期钩子，仅在父组件使用 loadMicroApp 方式加载本应用时生效
 */
export async function update(props) {
  // console.log("update props", props);
}

/**
 * more lifecycle:
 * https://single-spa.js.org/docs/building-applications.html#registered-application-lifecycle
 */
