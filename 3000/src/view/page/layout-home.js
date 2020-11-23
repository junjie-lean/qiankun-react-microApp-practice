/*
 * @Author: junjie.lean
 * @Date: 2020-03-18 11:00:47
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-23 13:37:11
 */

import React, { useEffect, useState, useRef } from "react";
import "./../../style/index.scss";
import { useSelector } from "react-redux";

function Home(props) {
  let reduxProps = useSelector((state) => state);

  let {
    globalState_reducer: {
      state: { token, orgcode },
    },
  } = reduxProps;

  const [string, setString] = useState(token);
  return (
    <div>
      <p>来自主应用的token:</p>
      <p>{string || "未设置"}</p>
    </div>
  );
}

export default Home;
