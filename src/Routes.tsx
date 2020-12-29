import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { DogsProps } from "./App";
import DogList from "./DogList";
import FilterDogDetails from "./FilterDogDetails";

function Routes({ dogs }: DogsProps) {
  return (
    <Switch>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      <Route path="/dogs/:name">
        <FilterDogDetails dogs={dogs} />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default Routes;
