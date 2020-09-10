import {Route, Switch} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import React from "react";
import HomePage from "../pages/HomePage";

export function UnsignedRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
    </Switch>
  )
}
