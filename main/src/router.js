/*
 * @Author: junjie.lean
 * @Date: 2020-07-16 13:53:50
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-11-03 09:23:33
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
      </Switch>
    </Router>
  );
};
