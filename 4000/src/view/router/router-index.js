import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "../page/layout-home";

export default function RouterRelation(props) {
  let { baseHash } = props;
  let bHash = window.__POWERED_BY_QIANKUN__ ? baseHash : "";
  console.log(bHash);
  return (
    <Router>
      <Switch>
        <Route path={bHash + "/"} exact component={Home} />
        <Route path={bHash + "/home"} exact component={Home} />
        <Redirect to={bHash + "/"} />
      </Switch>
    </Router>
  );
}
