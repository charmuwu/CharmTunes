import React from "react";
import { Route, Switch } from "react-router-dom";
import SignUpContainer from "./sessions/signup_container"
import {AuthRoute, ProtectedRoute} from '../utils/route_utils'

const App = () => (
  <div>
    <h1>imagine not having this finished yet</h1>
    
    <AuthRoute path="/signup" component={SignUpContainer} />
    
  </div>
);

export default App;