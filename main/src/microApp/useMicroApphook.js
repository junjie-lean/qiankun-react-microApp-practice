/*
 * @Author: junjie.lean
 * @Date: 2020-07-15 17:37:26
 * @Last Modified by:   junjie.lean
 * @Last Modified time: 2020-07-15 17:37:26
 */

import React, { useRef } from "react";

export default ({ name, entry }) => {
  const microApp = useRef();

  const createMicroApp = () => {};
  microApp.current = createMicroApp();
  return microApp.current;
};
