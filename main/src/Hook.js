/*
 * @Author: junjie.lean
 * @Date: 2020-07-16 13:58:40
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-03 09:29:57
 */

import React,{useEffect} from "react";
import { withRouter } from "react-router-dom";
import { loadMicroApp, initGlobalState } from "qiankun";

// import { useMicroApp, useQiankunState } from "./microApp/useMicroApphook";
import { Button } from "antd";

const microAppList = [];

export const useMicroApp = (config) => {
  const currentMicApp = loadMicroApp(config);
  microAppList.push(currentMicApp);
  return currentMicApp;
};

export default withRouter((props) => {
  const createMicroAppOne = () => {
    loadMicroApp({
      name: "app1",
      entry: "//localhost:3000",
      container: "#p3000",
    });
  };

  const createMicroAppTwo = () => {
    useMicroApp({
      name: "app2",
      entry: "//localhost:4000",
      container: "#p4000",
    });
  };
  useEffect(()=>{
    createMicroAppOne()
    createMicroAppTwo()
  },[])
  return (
    <div style={{ padding: 20 }}>
      <div className="btnzone">
        <Button type="primary" onClick={createMicroAppOne}>
          createMicroApp
        </Button>
        <Button
          type="primary"
          onClick={createMicroAppTwo}
          style={{ marginLeft: 30 }}
        >
          createMicroApp
        </Button>
      </div>
      <div className="microAppBox">
        <div className="hookMicroApp1 microAppContainer" id="p3000"></div>
        <div className="hookMicroApp2 microAppContainer" id="p4000"></div>
      </div>
    </div>
  );
});
