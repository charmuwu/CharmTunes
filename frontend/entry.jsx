import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'
import { postUser , postSession, deleteSession } from './utils/session_api_util'
import {signup} from './actions/session_actions'

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
    ReactDOM.render(<Root store={store} />, root);
});