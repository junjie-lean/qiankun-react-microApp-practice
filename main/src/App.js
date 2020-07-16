/*
 * @Author: junjie.lean
 * @Date: 2020-07-15 13:52:07
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-07-16 10:39:51
 */

import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { loadMicroApp, prefetchApps, initGlobalState } from "qiankun";
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
    a1.current = createMicroApp("/s3000", "3000");
    a2.current = createMicroApp("/s4000", "4000");
  }, []);

  return (
    <div className="App">
      <div className="btnzone">
        <button
          onClick={() => {
            setValue(value + 1);
          }}
        >
          value+1
        </button>
        <button
          onClick={() => {
            setValue(value - 1);
          }}
        >
          value-1
        </button>
        <button
          onClick={() => {
            a1.current.states.setGlobalState({ value });
            a1.current.states.offGlobalStateChange();
          }}
        >
          set to global state
        </button>
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
