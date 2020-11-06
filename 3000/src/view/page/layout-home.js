/*
 * @Author: junjie.lean
 * @Date: 2020-03-18 11:00:47
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-06 17:37:24
 */

import React, { useEffect, useState, useRef } from "react";
import "./../../style/index.scss";
import { Button } from "antd";

function Home(props) {
  const {
    history: { push },
  } = props;

  // history.constructor.prototype.pushWith = (v) => {
  //   push("/home/3000" + v);
  // };

  history.pushWith = (v) => {
    push("/home/3000" + v);
  };

  return (
    <div>
      <div>layout-home:3000</div>
      <Button
        type="danger"
        onClick={() => {
          history.pushWith("/hash");
        }}
      >
        to hash
      </Button>
      <Button
        type="primary"
        onClick={() => {
          push("/home/4000/");
        }}
      >
        to 4000
      </Button>
    </div>
  );
}

export default Home;
