/*
 * @Author: junjie.lean
 * @Date: 2020-11-06 13:41:23
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-06 17:05:18
 */

import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "antd";
export default withRouter((props) => {
  const {
    history: { push },
  } = props;
  return (
    <div>
      <div>layout-hash:3000</div>
      <Button
        onClick={() => {
          history.pushWith ? history.pushWith("/home") : console.log(history);
        }}
        type="primary"
      >
        to home
      </Button>
    </div>
  );
});
