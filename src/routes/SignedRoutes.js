import React from "react";
import {Route, Switch} from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import LogoutPage from "../pages/LogoutPage";
import PostsPage from "../pages/PostsPage";

export default function SignedRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={SearchPage} />
      <Route path="/posts" exact component={PostsPage} />
      <Route path="/logout" exact component={LogoutPage} />
    </Switch>
  )
}
