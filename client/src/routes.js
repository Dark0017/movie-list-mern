import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "./components/pages/form";

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Form} />
    </Switch>
  );
};

export default routes;
