/*
 * @Author: junjie.lean
 * @Date: 2020-11-09 17:32:29
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-09 17:46:58
 */

import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "antd";
import { action } from "./../../index";
export default withRouter((props) => {
  return (
    <div>
      <p>2000</p>
      <Button
        onClick={() => {
          action.setGlobalState({ token: Math.floor(Math.random() * 1e10) });
        }}
      >
        set state
      </Button>
    </div>
  );
});
