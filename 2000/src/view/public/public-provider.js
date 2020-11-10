/*
 * @Author: junjie.lean
 * @Date: 2020-03-17 09:52:08
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-09 17:45:19
 */

import React, { createContext, useEffect } from "react";
import zhCN from "antd/lib/locale-provider/zh_CN";
import RouterRelation from "../router/router-index";
import ProfilerMoniter from "./public-profile";
import { ConfigProvider } from "antd";
export const Context = createContext({});
export default function App(props) {
  const store = {};
  return (
    <ConfigProvider locale={zhCN}>
      <Context.Provider value={store}>
        <ProfilerMoniter id="react-root-app" open={false}>
          <RouterRelation {...props} />
        </ProfilerMoniter>
      </Context.Provider>
    </ConfigProvider>
  );
}
