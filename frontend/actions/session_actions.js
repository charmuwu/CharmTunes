import { deleteSession, postSession, postUser } from "../utils/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors,
});

export const login = formUser => dispatch => postSession(formUser)
 .then( user => dispatch({
    type: RECEIVE_CURRENT_USER,
    user
}));

export const logout = () => dispatch => deleteSession()
 .then(() => dispatch({
    type: LOGOUT_CURRENT_USER
}));

export const signup = formUser => dispatch => postUser(formUser)
 .then((user) => dispatch({
    type: RECEIVE_CURRENT_USER,
    user
}))