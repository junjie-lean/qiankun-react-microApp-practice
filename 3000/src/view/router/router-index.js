import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setGlobal_action } from "./../../redux/actions/qiankun.globalState.action";
import Home from "../page/layout-home";

export default function RouterRelation(props) {
  let baseHash = "";
  let dispatch = useDispatch();
  if (window.__POWERED_BY_QIANKUN__) {
    console.log(props);
    props.onGlobalStateChange((state) => {
      console.log("3000 listen state:", state);
      dispatch(setGlobal_action(state));
    });
    baseHash = props.baseHash;
  }

  return (
    <Router>
      <Switch>
        <Route path={baseHash + "/"} exact component={Home} />
        <Route path={baseHash + "/home"} exact component={Home} />
        {/* <Redirect to={baseHash + "/"} /> */}
      </Switch>
    </Router>
  );
}
