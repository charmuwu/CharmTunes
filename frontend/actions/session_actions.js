import { deleteSession, postSession, postUser, getUser } from "../utils/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const GET_USER = "GET_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RESET_ERRORS = "RESET_ERRORS";

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors,
});

export const resetErrors = () => ({
    type: RESET_ERRORS, 
})

export const login = formUser => dispatch => postSession(formUser)
    .then( user => dispatch({
            type: RECEIVE_CURRENT_USER,
            user
        }), 
        error => dispatch(receiveErrors(error.responseJSON))
    );

export const logout = () => dispatch => deleteSession()
    .then(() => dispatch({
        type: LOGOUT_CURRENT_USER
    }));

export const signup = formUser => dispatch => postUser(formUser)
    .then((user) => dispatch({
        type: RECEIVE_CURRENT_USER,
        user}), error => dispatch(receiveErrors(error.responseJSON)));

export const getCurrentUser = userId => dispatch => getUser(userId)
    .then( user => dispatch({
        type: GET_USER, user
    }));