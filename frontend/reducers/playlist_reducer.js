import { RECEIVE_PLAYLIST, RECEIVE_PLAYLISTS, NEW_PLAYLIST, DELETE_PLAYLIST, UPDATE_PLAYLIST } from '../actions/playlist_actions';

const playlistReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case NEW_PLAYLIST:
            return Object.assign({}, state, {[action.playlist.id]: action.playlist})
        case UPDATE_PLAYLIST:
            return Object.assign({}, state, {[action.playlist.id]: action.playlist})
        case RECEIVE_PLAYLIST:
            return Object.assign({}, state, {[action.playlist.id]: action.playlist})
        case RECEIVE_PLAYLISTS:
            return action.playlists;
        case DELETE_PLAYLIST:
            const newState = Object.assign({}, state)
            delete newState[action.playlist.id]
            return newState;
        default:
            return state;
    }
}
export default playlistReducer;