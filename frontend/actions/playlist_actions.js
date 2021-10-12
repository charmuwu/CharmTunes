import {fetchPlaylists, fetchPlaylist, postPlaylist, deletePlaylist} from '../utils/playlist_api_util';

export const RECEIVE_CURRENT_PLAYLIST = 'RECEIVE_CURRENT_PLAYLIST';
export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';

export const getPlaylist = playlistId => dispatch => fetchPlaylist(playlistId)
    .then( playlist => dispatch({type: RECEIVE_CURRENT_PLAYLIST, playlist}));

export const getPlaylists = () => dispatch => fetchPlaylists()
    .then( (playlists) => dispatch({type: RECEIVE_PLAYLISTS, playlists}));


