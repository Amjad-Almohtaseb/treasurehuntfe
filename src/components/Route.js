import { Route, Switch } from "react-router";

import TreasureList from "./TreasureList";
import GarbageList from "./GarbageList";
import Signup from "./Signup";
import Signin from "./Signin";
import Home from "./Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/treasures">
        <TreasureList />
      </Route>
      <Route path="/garbages">
        <GarbageList />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
