/*
 * @Author: junjie.lean
 * @Date: 2020-03-17 09:52:08
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-06 17:26:57
 */

import React, { createContext } from "react";
import zhCN from "antd/lib/locale-provider/zh_CN";
import RouterRelation from "../router/router-index";
import ProfilerMoniter from "./public-profile";
import Antd from "antd";

export const Context = createContext({});

export default function App(props) {
  const store = {
    setValue: (key, value) => {
      store[key] = value;
    },
    deleteKey: (key) => {
      delete store[key];
    },
  };

  return (
    <Antd.ConfigProvider locale={zhCN}>
      <ProfilerMoniter id="react-root-app" open={false}>
        这是4000端口起的项目
        <RouterRelation {...props} />
      </ProfilerMoniter>
    </Antd.ConfigProvider>
  );
}
