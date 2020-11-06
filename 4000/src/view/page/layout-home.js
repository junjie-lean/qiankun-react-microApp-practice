/*
 * @Author: junjie.lean
 * @Date: 2020-03-18 11:00:47
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-06 17:36:00
 */

import React, { useEffect, useState, useRef } from "react";
import "./../../style/index.scss";
import { Button } from "antd";

function Home(props) {
  
  return (
    <div>
      <p>4000</p>
      <Button
        onClick={() => {
          props.history.push("/home/3000/home");
        }}
        type="primary"
      >
        to 3000
      </Button>
    </div>
  );
}

export default Home;
