/*
 * @Author: junjie.lean
 * @Date: 2020-03-17 09:52:08
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-05 14:16:45
 */

import React, { createContext } from "react";
import zhCN from "antd/lib/locale-provider/zh_CN";
import RouterRelation from "../router/router-index";
import ProfilerMoniter from "./public-profile";
import Antd from "antd";

export const Context = createContext({});

export default function App() {
  return (
    <Antd.ConfigProvider locale={zhCN}>
      {/* <Context.Provider value={store}> */}
      <ProfilerMoniter id="react-root-app" open={false}>
        <div>这是3000端口起的项目</div>
        {/* <RouterRelation /> */}
      </ProfilerMoniter>
      {/* </Context.Provider> */}
    </Antd.ConfigProvider>
  );
}
