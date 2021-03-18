import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'
import { postUser , postSession, deleteSession } from './utils/session_api_util'
import {signup} from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById("root");
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = signup;
    ReactDOM.render(<Root store={store} />, root);
});