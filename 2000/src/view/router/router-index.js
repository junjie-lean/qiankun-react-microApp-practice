import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Loading from "../page/layout-loading";
import Home from "../page/layout-home";
import Self from "./../components/component-self";

export default function RouterRelation() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Loading} />
        <Route path="/loading" component={Loading} />
        <Route path="/home" component={Home} />
        <Redirect to="/loading" />
      </Switch>
    </Router>
  );
}

export function HomeRouter() {
  return (
    <Switch>
      <Route path="/home/2000" component={Self} />
    </Switch>
  );
}
