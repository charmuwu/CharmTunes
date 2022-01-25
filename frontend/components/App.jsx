import React from "react";
import { Route, Switch } from "react-router-dom";
import SignUpContainer from "./sessions/signup_container";
import LogInContainer from "./nav_bar/login_container";
import SplashContainer from "./splash/splash_container";
import MusicContainer from "./musicplayer/music_container";
import {AuthRoute, ProtectedRoute} from '../utils/route_utils';
import SongsContainer from "./songs/songs_container";
import SidebarComponent from "./sidebar/sidebar_component";
import SidebarContainer from "./sidebar/sidebar_container";
import PlaylistContainer from "./playlists/playlist_containter";

const App = () => (
  
  <div>
    <div className="test">
      <div className="sidebarsplash">
        <Route path="/" component={SplashContainer} />
        <Route path="/" component={SidebarContainer}/>
      </div>
      
      <Route path="/" component={MusicContainer} />
      <Route exact path="/" component={SongsContainer} />
      <ProtectedRoute exact path="/playlist/:playlistObjId" component={PlaylistContainer} />
    </div>
    <Switch>
      <ProtectedRoute path="/users" />
      <AuthRoute path="/signup" component={SignUpContainer} />
      <AuthRoute path="/login" component={LogInContainer} />
    </Switch>
  </div>
);

export default App;