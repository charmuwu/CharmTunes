import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';

const playlistReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_PLAYLIST:
            return action.playlist;
        default:
            return state;
    }
}
export default playlistReducer;