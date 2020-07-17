/*
 * @Author: junjie.lean
 * @Date: 2020-07-15 17:37:26
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-07-17 10:21:49
 */

import React, { useRef } from "react";
import { loadMicroApp, initGlobalState } from "qiankun";

const microAppList = [];

export const useMicroApp = (config) => {
  const currentMicApp = loadMicroApp(config);
  microAppList.push(currentMicApp);
  return currentMicApp;
};

export const useQiankunState = (initData) => {
  return {
    initGlobalData() {
      microAppList.length
        ? (microAppList[0].states = initGlobalState(initData))
        : null;
    },
    setGlobalState(key, value) {
      let obj = {};
      obj[key] = value;
      microAppList.length ? microAppList[0].states.setGlobalState(obj) : null;
    },
    onGlobalChange(callback) {
      microAppList.length
        ? microAppList[0].statesonGlobalStateChange((nextProps, prevState) => {
            callback(nextProps, prevState);
          })
        : null;
    },
  };
};
