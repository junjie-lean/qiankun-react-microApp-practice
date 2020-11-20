/*
 * @Author: junjie.lean
 * @Date: 2020-01-09 14:17:37
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-20 14:34:26
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

const qiankunStartConfig = {
  perfetch: true,
  // singular: false,
};
const defaultState = { token: "", orgcode: "" };

export const action = initGlobalState(defaultState);

action.onGlobalStateChange((state) => {
  console.log("2000 listen state:", state);
});

registerMicroApps([
  {
    name: "react app 3000",
    entry: "//localhost:3000",
    container: "#microAppContent",
    activeRule: (location) => location.hash.indexOf("micro/3000") > -1,
    props: {
      baseHash: "/micro/3000",
    },
  },
  {
    name: "react app 4000",
    entry: "//localhost:4000",
    container: "#microAppContent",
    activeRule: (location) => location.hash.indexOf("micro/4000") > -1,
    props: {
      baseHash: "/micro/4000",
    },
  },
]);

start(qiankunStartConfig);

render(<App />, DOM);
