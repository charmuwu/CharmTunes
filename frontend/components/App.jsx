import React from "react";
import { Route, Switch } from "react-router-dom";
import SignUpContainer from "./sessions/signup_container"
import {AuthRoute, ProtectedRoute} from '../utils/route_utils'

const App = () => (
  <div>
    
    
    <AuthRoute path="/signup" component={SignUpContainer} />
    
  </div>
);

export default App;