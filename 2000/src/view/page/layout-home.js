/*
 * @Author: junjie.lean
 * @Date: 2020-03-18 11:00:47
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-25 17:05:43
 */

import React, { useEffect, useState, useRef } from "react";
import { Layout, Menu, Button } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  HddOutlined,
  IdcardFilled,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;
import { HomeRouter } from "./../router/router-index";

function Home(props) {
  return (
    <div style={{ height: "100%" }}>
      <Layout style={{ height: "100%" }}>
        <Sider breakpoint="lg" collapsedWidth="0" style={{ height: "100%" }}>
          <div
            className="logo"
            style={{ height: 32, margin: 16, fontSize: 20, color: "#fff" }}
          >
            qiankun
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
            <Menu.Item
              key="0"
              icon={<HddOutlined />}
              onClick={() => {
                props.history.push("/micro/2000");
              }}
            >
              pirmary
            </Menu.Item>
            <Menu.Item
              key="1"
              icon={<UserOutlined />}
              onClick={() => {
                props.history.push("/micro/3000/home");
              }}
            >
              micro app a
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<VideoCameraOutlined />}
              onClick={() => {
                props.history.push("/micro/4000/");
              }}
            >
              micro app b
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<IdcardFilled />}
              onClick={() => {
                props.history.push("/micro/iframe");
              }}
            >
              iframe app
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, height: "100%" }}
            >
              <HomeRouter />
              <div id="microAppContent"></div>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}></Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default Home;
