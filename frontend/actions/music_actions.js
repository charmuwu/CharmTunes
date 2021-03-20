import { fetchSongs, fetchSong} from '../utils/music_api_util';

export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';

export const getSong = songId => dispatch => fetchSong(songId)
    .then( songId => dispatch({type: RECEIVE_CURRENT_SONG, songId}));

export const getSongs = () => dispatch => fetchSongs()
    .then( () => dispatch({type: RECEIVE_CURRENT_SONG}));