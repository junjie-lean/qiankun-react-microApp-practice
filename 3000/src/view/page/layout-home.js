/*
 * @Author: junjie.lean
 * @Date: 2020-03-18 11:00:47
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-09 17:24:35
 */

import React, { useEffect, useState, useRef } from "react";
import "./../../style/index.scss";
import { Button } from "antd";

function Home(props) {
  const {
    history: { push },
  } = props;

  history.pushWith = (v) => {
    push("/home/3000" + v);
  };

  return (
    <div>
      <div>layout-home:3000</div>

      <div
        style={{ display: "flex", width: 300, justifyContent: "space-around" }}
      >
        <Button
          type="primary"
          onClick={() => {
            history.pushWith("/hash");
          }}
        >
          to hash
        </Button>
        <Button
          type="primary"
          onClick={() => {
            console.log(props);
            // props.setGlobalState({ token: "321" });
          }}
        >
          setGlobalState
        </Button>
      </div>
    </div>
  );
}

export default Home;
