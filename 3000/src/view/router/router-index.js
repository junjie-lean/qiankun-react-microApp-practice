import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setGlobal_action } from "./../../redux/actions/qiankun.globalState.action";
import Home from "../page/layout-home";
export default function RouterRelation(props) {
  let baseHash = "";
  let dispatch = useDispatch();

  if (window.__POWERED_BY_QIANKUN__) {
    props.onGlobalStateChange
      ? props.onGlobalStateChange((state) => {
          //state
          dispatch(setGlobal_action(state));
        }, true)
      : "";
    baseHash = props.baseHash; //iserm
  }

  console.log(props);
  return (
    <Router>
      <Switch>
        <Route path={baseHash + "/"} exact component={Home} />
        <Route
          exact
          path={baseHash + "/home"}
          render={() => {
            return <Home />;
          }}
        />

        <Route
          path={baseHash + "/cs"}
          render={() => {
            return props.route === 1 ? <div>111111</div> : <div>222222</div>;
          }}
        />
      </Switch>
    </Router>
  );
}
