import { fetchPlaysongs, postPlaysong, destroyPlaysong } from "../utils/playsong_api_util";

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors,
});

export const getPlaysongs = playlistId => dispatch => fetchPlaysongs(playlistId)
    .then( playsongs => dispatch({type: RECEIVE_PLAYSONGS, playsongs})); // will have to fix

export const createPlaysong = (playlistId, songId) => dispatch => postPlaysong(playlistId, songId)
    .then( playsong => dispatch({type: CREATE_PLAYSONG, playsong}), 
        error => dispatch(receiveErrors(error.responseJSON)));
    // will have to fix?

export const deletePlaysong = (playlistId, songId) => dispatch => destroyPlaysong(playlistId, songId)
    .then (playsong => dispatch({type: DELETE_PLAYSONG, playsong})); // will have to fix ? 