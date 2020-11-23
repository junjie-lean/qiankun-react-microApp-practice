/*
 * @Author: junjie.lean
 * @Date: 2020-11-09 17:32:29
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-23 13:32:29
 */

import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "antd";
import { action } from "./../../index";
import { useSelector, useDispatch } from "react-redux";
import { modifyToken_action } from "./../../redux/actions/index.actions";
export default withRouter((props) => {
  const [token, setToken] = useState("");

  const reduxProps = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("reduxProps:", reduxProps);
  });

  action?.onGlobalStateChange((state) => {
    console.log("state change :", state);
  });

  useEffect(() => {
    setToken(reduxProps.token_reducer.token || "");
  }, []);
  return (
    <div>
      <p>这是2000端口起的项目:</p>
      <p>
        <span>{token ? "token:" + token : ""}</span>
      </p>
      <hr />
      <Button
        onClick={() => {
          let tk = Array.from({ length: 64 })
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join("")
            .toUpperCase();
          setToken(tk);
          dispatch(modifyToken_action(tk));
          action.setGlobalState({ token: tk });
        }}
      >
        生成token
      </Button>
      <br />
      <br />
      <br />
      <Button
        onClick={() => {
          let tk = "";
          setToken(tk);
          dispatch(modifyToken_action(tk));
          action.setGlobalState({ token: tk });
        }}
      >
        清除token
      </Button>
    </div>
  );
});
