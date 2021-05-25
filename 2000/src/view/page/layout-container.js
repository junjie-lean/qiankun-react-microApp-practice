/*
 * @Author: junjie.lean
 * @Date: 2021-03-15 16:12:26
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2021-03-15 16:16:01
 */

import React from "react";
import { withRouter } from "react-router";

export default withRouter((props) => {
  return (
    <div style={{ display: "flex" }}>
      <div
        className="micro1"
        style={{
          minWidth: 300,
          minHeight: 400,
          margin: 20,
          border: "1px solid red",
        }}
      ></div>
      <div
        className="micro2"
        style={{
          minWidth: 300,
          minHeight: 400,
          border: "1px solid red",
          margin: 20,
        }}
      ></div>
    </div>
  );
});
