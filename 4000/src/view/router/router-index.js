import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../page/layout-home";

export default function RouterRelation() {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
