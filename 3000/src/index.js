/*
 * @Author: junjie.lean
 * @Date: 2020-01-09 14:17:37
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-23 10:43:42
 */

import "core-js";
import React from "react";
import ReactDOM from "react-dom";
import App from "./view/public/public-provider";

function render(props = {}) {
  const DOM = document.getElementById("microAppContainer3000");
  ReactDOM.render(<App {...props} />, DOM);
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap(props) {
  const DOM = document.getElementById("microAppContainer3000");
  ReactDOM.render(<div> 加载中.......</div>, DOM);
}

export async function mount(props) {
  // props.onGlobalStateChange((state) => {
  //   console.log("mount:", state);
  //   render(props);
  // });
  render(props);
}

export async function unmount() {
  const DOM = document.getElementById("microAppContainer3000");
  ReactDOM.unmountComponentAtNode(DOM);
}

export async function update(props) {
  console.log("update props", props);
}
