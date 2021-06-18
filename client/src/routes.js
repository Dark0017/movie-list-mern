import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "./components/pages/form";
import Feed from "./components/pages/feed";

const routes = () => {
  return (
    <Switch>
      <Route exact path="/form" component={Form} />
      <Route exact path="/feed" component={Feed} />
    </Switch>
  );
};

export default routes;
