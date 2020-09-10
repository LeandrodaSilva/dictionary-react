import React from "react";
import {Route, Switch} from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import LogoutPage from "../pages/LogoutPage";

export default function SignedRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={SearchPage} />
      <Route path="/logout" exact component={LogoutPage} />
    </Switch>
  )
}
