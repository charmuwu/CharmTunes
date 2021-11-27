import {fetchPlaylists, fetchPlaylist, postPlaylist, deletePlaylist} from '../utils/playlist_api_util';

export const RECEIVE_CURRENT_PLAYLIST = 'RECEIVE_CURRENT_PLAYLIST';
export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const DELETE_PLAYLIST = 'DELETE_PLAYLIST';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors,
});
//getPlaysong(s) what else should i add in?
//I need songs in a specific playlistId

//export const getPlaysongs = playlistId => dispatch => fetchPlaysongs(playlistId)
// .then( playlist => dispatch({type: RECEIVE_PLAYSONGS, playsongs}))

export const getPlaylist = playlistId => dispatch => fetchPlaylist(playlistId)
    .then( playlist => dispatch({type: RECEIVE_CURRENT_PLAYLIST, playlist}));

export const getPlaylists = () => dispatch => fetchPlaylists()
    .then( (playlists) => dispatch({type: RECEIVE_PLAYLISTS, playlists}));

export const newPlaylist = formPlaylist => dispatch => postPlaylist(formPlaylist)
    .then((playlist) => dispatch({
       type: RECEIVE_CURRENT_PLAYLIST,
       playlist}), error => dispatch(receiveErrors(error.responseJSON)));

export const noMorePlaylist = () => dispatch => deletePlaylist()
    .then(() => dispatch({
    type: DELETE_PLAYLIST}));

    