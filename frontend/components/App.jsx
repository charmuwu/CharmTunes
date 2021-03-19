import React from "react";
import { Route, Switch } from "react-router-dom";
import SignUpContainer from "./sessions/signup_container";
import LogInContainer from "./nav_bar/login_container";
import SplashContainer from "./splash/splash_container";
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={SplashContainer} />
      <AuthRoute path="/signup" component={SignUpContainer} />
      <AuthRoute path="/login" component={LogInContainer} />
    </Switch>
  </div>
);

export default App;