import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'
import { postUser , postSession, deleteSession } from './utils/session_api_util'
import { signup, logout } from './actions/session_actions';
import { getSongs } from './actions/music_actions';
import { getPlaylists } from './actions/playlist_actions';

document.addEventListener("DOMContentLoaded", () => {
    let preloadedState = undefined;
    if(window.currentUser){
        preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser,
                }
            },
            session: {
                currentUser: currentUser.id,
            }
        }
    }
    const root = document.getElementById("root");
    const store = configureStore(preloadedState);
    
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = signup;
    window.logout = logout;
    window.getSongs = getSongs;
    window.getPlaylists = getPlaylists;

    ReactDOM.render(<Root store={store} />, root);
});