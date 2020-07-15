/*
 * @Author: junjie.lean
 * @Date: 2020-03-18 11:00:47
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-07-15 15:55:01
 */

import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Context } from "./../public/public-provider";
export default withRouter(() => {
  const store = useContext(Context);

  const [propsValue, setPropsValue] = useState(store?.value || 0);

  useEffect(() => {
    if (store.hasOwnProperty("value")) {
      setPropsValue(store.value);
    }
  }, [store]);

  return (
    <div
      style={{
        widht: "100%",
        height: "460px",
        background: "yellow",
        padding: 20,
      }}
    >
      port:4000
      <hr />
      global state: value={propsValue}
      <hr />
      <button
        onClick={() => {
          store.setGlobalState({ value: propsValue / 2 });
        }}
      >
        value ➗  2
      </button>
    </div>
  );
});
