import React from "react";
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "../page/layout-home";

export default function RouterRelation() {
  const basename = window.__POWERED_BY_QIANKUN__ ? "/s3000" : "/";

  return (
    <Router basename={basename}>
      <Switch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/" component={Home} />
        {/* <Route path="/changelog" component={ChangeLog} /> */}
      </Switch>
    </Router>
  );
}
