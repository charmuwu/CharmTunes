import { fetchSongs, fetchSong} from '../utils/music_api_util';

export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const IS_PLAYING = 'IS_PLAYING';

export const getSong = songId => dispatch => fetchSong(songId)
    .then( song => dispatch({type: RECEIVE_CURRENT_SONG, song}));

export const getSongs = () => dispatch => fetchSongs()
    .then( (songs) => dispatch({type: RECEIVE_SONGS, songs}));

export const playPause = {type: IS_PLAYING};