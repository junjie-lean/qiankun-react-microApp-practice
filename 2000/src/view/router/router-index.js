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
import Iframe from "./../components/component-iframe";

export default function RouterRelation() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Loading} />
        <Route path="/loading" component={Loading} />
        <Route path="/micro" component={Home} />
        {/* <Redirect to="/micro" /> */}
      </Switch>
    </Router>
  );
}

export function HomeRouter() {
  return (
    <Switch>
      <Route path="/micro/2000" component={Self} />
      <Route path="/micro/iframe" component={Iframe} />
    </Switch>
  );
}
