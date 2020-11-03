/*
 * @Author: junjie.lean
 * @Date: 2020-07-15 13:52:07
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-03 09:22:55
 */

import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { initGlobalState, loadMicroApp } from "qiankun";
import { Button } from "antd";

function App() {
  const [value, setValue] = useState(0);
  let a1 = useRef(),
    a2 = useRef();

  const createMicroApp = (name, port) => {
    let microApp = loadMicroApp({
      name,
      entry: `//localhost:${port}`,
      container: `#p${port}`,
    });

    microApp.states = initGlobalState({ value: 0 });
    microApp.states.onGlobalStateChange((state, prev) => {
      setValue(state.value);
    });
    return microApp;
  };

  useEffect(() => {
    // a1.current = createMicroApp("/s3000", "3000");
    // a2.current = createMicroApp("/s4000", "4000");
  }, []);

  const createMicroAppOne = () => {
    a1.current = createMicroApp("app1", "3000");
  };

  const createMicroAppTwo = () => {
    a2.current = createMicroApp("app2", "4000");
  };

  return (
    <div className="App">
      <div className="btnzone">
        <Button type="primary" onClick={createMicroAppOne}>
          创建子应用A
        </Button>
        <Button type="primary" onClick={createMicroAppTwo}>
          创建子应用B
        </Button>
        <Button
          onClick={() => {
            setValue(value + 1);
          }}
        >
          value+1
        </Button>
        <Button
          onClick={() => {
            setValue(value - 1);
          }}
        >
          value-1
        </Button>
        <Button
          onClick={() => {
            a1.current.states.setGlobalState({ value });
            a1.current.states.offGlobalStateChange();
          }}
        >
          set to global state
        </Button>
      </div>
      <h3>global state: value={value}</h3>
      <div className="sonContainer">
        <div id="p3000"></div>
        <div id="p4000"></div>
      </div>
    </div>
  );
}

export default App;
