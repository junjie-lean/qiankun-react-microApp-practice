/*
 * @Author: junjie.lean
 * @Date: 2020-11-25 16:58:07
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-25 17:02:24
 */

import React from "react";
import { withRouter } from "react-router-dom";

export default withRouter((props) => {
  return (
    <div style={{ height: "100%" }}>
      <iframe
        frameBorder="0"
        src="https://www.baidu.com"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
});
