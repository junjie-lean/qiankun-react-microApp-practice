/*
 * @Author: junjie.lean
 * @Date: 2020-11-09 17:32:29
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-20 14:19:36
 */

import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "antd";
import { action } from "./../../index";
export default withRouter((props) => {
  const [token, setToken] = useState("");
  const [disableTimeClick, setDisableState] = useState(false);

  return (
    <div>
      <p>这是2000端口起的项目:</p>
      <p>
        <span>current token value:</span>
        <span>{token}</span>
      </p>
      <hr />
      <Button
        onClick={() => {
          let tk = Math.floor(Math.random() * 1e20)
            .toString(16)
            .toUpperCase();
          setToken(tk + tk);
          action.setGlobalState({ token: tk + tk });
        }}
      >
        change token
      </Button>
    </div>
  );
});
