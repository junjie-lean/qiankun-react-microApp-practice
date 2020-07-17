/*
 * @Author: junjie.lean
 * @Date: 2020-07-16 13:58:40
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-07-17 13:33:37
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
    // let a = useMicroApp({
    //   name: "/s3000",
    //   entry: "//localhost:3000",
    //   container: ".hookMicroApp1",
    // });
    // console.log(a);
    loadMicroApp({
      name: "app1",
      entry: "//localhost:3000",
      container: ".hookMicroApp1",
    });
  };

  const createMicroAppTwo = () => {
    useMicroApp({
      name: "app2",
      entry: "//localhost:4000",
      container: ".hookMicroApp2",
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
        <div className="hookMicroApp1 microAppContainer"></div>
        <div className="hookMicroApp2 microAppContainer"></div>
      </div>
    </div>
  );
});
