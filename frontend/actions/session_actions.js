import { deleteSession, postSession, postUser } from "../utils/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors,
});

//thunk action creators

export const login = formUser => dispatch => postSession(formUser)
 .then( user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
 .then(() => dispatch(logoutCurrentUser()));

export const signup = formUser => dispatch => postUser(formUser)
 .then((user) => dispatch(receiveCurrentUser(user)))