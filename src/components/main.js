import React from "react";
import { Switch, Route, Routes } from "react-router";
import Content1 from "./Content1";
import { About } from "./About";
import { Essentials } from "./essentials";
import Bestsellers from "./Bestsellers";
import Login from "./registration/Login";

const main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Content1} />
        <Route exact path="/essentials" component={Essentials} />
        <Route exact path="/maccessentials" component={Content1} />
        <Route exact path="/bestsellers" component={Bestsellers} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default main;

// {<Route exact path="/login" component={Login} />
// }
