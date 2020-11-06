/*
 * @Author: junjie.lean
 * @Date: 2020-03-17 09:52:08
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-06 17:17:35
 */

import React, { createContext } from "react";
import zhCN from "antd/lib/locale-provider/zh_CN";
import RouterRelation from "../router/router-index";
import ProfilerMoniter from "./public-profile";
import Antd from "antd";

export const Context = createContext({});

export default function App(props) {
  return (
    <Antd.ConfigProvider locale={zhCN}>
      {/* <Context.Provider value={store}> */}
      <ProfilerMoniter id="react-root-app" open={false}>
        <div style={{ padding: 30 }}>
          <div>这是3000端口起的项目</div>
          <div>下面是router:</div>
          <RouterRelation {...props} />
        </div>
      </ProfilerMoniter>
      {/* </Context.Provider> */}
    </Antd.ConfigProvider>
  );
}
