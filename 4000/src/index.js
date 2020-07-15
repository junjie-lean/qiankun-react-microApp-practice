/*
 * @Author: junjie.lean
 * @Date: 2020-01-09 14:17:37
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-07-15 15:50:24
 */

import React from "react";
import { render } from "react-dom";
import App from "./view/public/public-provider";
const DOM = document.getElementById("s4000");
document.title = "s4000";

const renderer = (props) => {
  render(<App {...props} />, DOM);
};

// 生命周期 - 挂载前
export async function bootstrap(props) {
  // console.log("4000 开始引导 ");
}

// 生命周期 - 挂载后
export async function mount(props) {
  // console.log("4000 开始挂载 ");
  // 渲染
  props.onGlobalStateChange((next, prev) => {
    renderer({
      ...props,
      ...next,
    });
  });
  renderer(props);
}

// 生命周期 - 解除挂载
export async function unmount() {
  // console.log("4000 解除挂载 ");
}

// 本地调试
if (!window.__POWERED_BY_QIANKUN__) {
  renderer();
}
