import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../page/layout-home";

export default function RouterRelation() {
  const basename = window.__POWERED_BY_QIANKUN__
    ? window.location.pathname
    : "/";
  return (
    <Router basename={basename}>
      <Switch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}
