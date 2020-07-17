/*
 * @Author: junjie.lean
 * @Date: 2020-07-16 13:53:50
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-07-16 14:00:18
 */

import React from "react";
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import App from "./App";
import Hook from "./Hook";

export default (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/hook" component={Hook} />
        <Redirect to={"/"} />
      </Switch>
    </Router>
  );
};
