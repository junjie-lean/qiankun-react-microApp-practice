/*
 * @Author: junjie.lean
 * @Date: 2020-01-09 14:17:37
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2021-03-15 16:26:56
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
  perfetch: 1 === 1,
  singular: false,
};
const defaultState = { token: "", orgcode: "" };

export const action = initGlobalState(defaultState);

// action.onGlobalStateChange((state) => {
//   console.log("2000 listen state:", state);
// });

registerMicroApps([
  {
    name: "react app 3000",
    entry: "//" + location.hostname + ":3002",
    container: ".micro1",
    activeRule: (location) => location.hash.indexOf("/cs") > -1,
    props: {
      baseHash: "",
      route: 1,
    },
  },
  // {
  //   name: "react app 4000",
  //   entry: "//" + location.hostname + ":3002",
  //   // entry: "//localhost:4000",
  //   container: ".micro2",
  //   activeRule: (location) => location.hash.indexOf("/cs") > -1,
  //   props: {
  //     baseHash: "",
  //     route: 2,
  //   },
  // },
]);

start(qiankunStartConfig);

render(<App />, DOM);
