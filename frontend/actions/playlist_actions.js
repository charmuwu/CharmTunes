import {fetchPlaylists, fetchPlaylist, postPlaylist, deletePlaylist, patchPlaylist} from '../utils/playlist_api_util';

export const RECEIVE_CURRENT_PLAYLIST = 'RECEIVE_CURRENT_PLAYLIST';
export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const DELETE_PLAYLIST = 'DELETE_PLAYLIST';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_PLAYSONGS = "RECEIVE_PLAYSONGS";
export const NEW_PLAYLIST = "NEW_PLAYLIST";
export const UPDATE_PLAYLIST = "UPDATE_PLAYLIST";

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors,
});
export const receiveCurrentPlaylist = (currentPlaylist) => ({
    type: RECEIVE_CURRENT_PLAYLIST,
    currentPlaylist,
});

//I need songs in a specific playlistId

export const getPlaysongs = playlistId => dispatch => fetchPlaysongs(playlistId)
.then( playsongs => dispatch({type: RECEIVE_PLAYSONGS, playsongs}))

export const getPlaylist = playlistId => dispatch => fetchPlaylist(playlistId)
    .then( playlist => dispatch({type: RECEIVE_PLAYLIST, playlist}));

export const getPlaylists = () => dispatch => fetchPlaylists()
    .then( (playlists) => dispatch({type: RECEIVE_PLAYLISTS, playlists}));

export const newPlaylist = formPlaylist => dispatch => postPlaylist(formPlaylist)
    .then((playlist) => dispatch({
       type: NEW_PLAYLIST,
       playlist}), error => dispatch(receiveErrors(error.responseJSON)));

export const updatePlaylist = (playlist, id) => dispatch => patchPlaylist(playlist, id)
    .then((playlist) => dispatch(getPlaylist(playlist)),
        error => dispatch(receiveErrors(error.responseJSON)));

export const noMorePlaylist = () => dispatch => deletePlaylist()
    .then(() => dispatch({
    type: DELETE_PLAYLIST}));

    