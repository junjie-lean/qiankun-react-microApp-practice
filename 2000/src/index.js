/*
 * @Author: junjie.lean
 * @Date: 2020-01-09 14:17:37
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-16 16:21:17
 */

import "core-js";
import React from "react";
import { render } from "react-dom";
import App from "./view/public/public-provider";
import "./style/index.scss";
import {
  registerMicroApps,
  start,
  initGlobalState,
  MicroAppStateActions,
} from "qiankun";
const DOM = document.getElementById("microApp");
document.title = "qiankun micro app framework";
window.__POWERED_BY_QIANKUN__ = true;

const qiankunStartConfig = {};
const defaultState = { token: "", orgcode: "" };

export const action = initGlobalState(defaultState);

action.onGlobalStateChange((state) => {
  console.log("2000 listen state:", state);
});

registerMicroApps([
  {
    name: "react app 3000",
    entry: "//localhost:3000",
    container: "#microContainer",
    activeRule: (location) => {
      let condition = location.hash.indexOf("home/3000") > -1;
      return condition;
    },
    props: {
      baseHash: "/home/3000",
    },
  },
  {
    name: "react app 4000",
    entry: "//localhost:4000",
    container: "#microContainer",
    activeRule: (location) => {
      let condition = location.hash.indexOf("home/4000") > -1;
      return condition;
    },
    props: {
      baseHash: "/home/4000",
    },
  },
]);

start(qiankunStartConfig);

render(<App />, DOM);
