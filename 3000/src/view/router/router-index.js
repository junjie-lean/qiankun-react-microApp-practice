import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../page/layout-home";

export default function RouterRelation() {
  console.log("3000 router");
  return (
    <Router>
      <Switch>
        {/* <Route path="/" component={Home} /> */}
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
}
