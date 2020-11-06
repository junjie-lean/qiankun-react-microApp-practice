import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "../page/layout-home";
import Hash from "../page/layout-hash";

export default function RouterRelation(props) {
  let { pathname, hash } = window.location;
  let { baseHash } = props;
  let bHash = window.__POWERED_BY_QIANKUN__ ? baseHash : "";
  return (
    <Router>
      <Switch>
        <Route path={bHash + "/"} exact component={Home} />
        <Route path={bHash + "/home"} exact component={Home} />
        <Route path={bHash + "/hash"} exact component={Hash} />
        <Redirect to={bHash + "/"} />
      </Switch>
    </Router>
  );
}
