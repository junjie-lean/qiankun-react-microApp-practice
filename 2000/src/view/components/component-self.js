/*
 * @Author: junjie.lean
 * @Date: 2020-11-09 17:32:29
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-16 15:11:25
 */

import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "antd";
import { action } from "./../../index";
export default withRouter((props) => {
  const [token, setToken] = useState("");

  return (
    <div>
      <p>2000</p>
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
