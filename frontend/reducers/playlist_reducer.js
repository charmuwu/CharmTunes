import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS } from '../actions/playlist_actions';

const playlistReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_PLAYLIST:
            return action.playlist;
        case RECEIVE_PLAYLISTS:
            return action.playlists;
        default:
            return state;
    }
}
export default playlistReducer;