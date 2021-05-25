/*
 * @Author: junjie.lean
 * @Date: 2020-03-18 11:00:47
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2021-05-25 14:16:30
 */

import React, { useEffect, useState, useRef } from "react";
import "./../../style/index.scss";
import { Button } from "antd";
import { useSelector } from "react-redux";

function Home(props) {
  let reduxProps = useSelector((state) => state);

  let {
    globalState_reducer: {
      state: { token, orgcode },
    },
  } = reduxProps;

  const [string, setString] = useState(token);

  const bccFlag = "test";
  const [BCC, setBCC] = useState(null);

  const createBCC = () => {
    if (BCC === null) {
      const bcc = new BroadcastChannel(bccFlag);
      console.log(bcc)
      setBCC(bcc);
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <Button type="primary" onClick={createBCC}>
        创建BCC
      </Button>
    </div>
  );
}
export default Home;
