import React from 'react';
import Home from "./Home"
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import DogList from "./DogList";
import FilterDogDetails from "./FilterDogDetails";

function Routes({doggos}) {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/doggos">
        <DogList doggos={doggos} />
      </Route>
      <Route exact path="/doggos/:name">
        <FilterDogDetails doggos={doggos} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
