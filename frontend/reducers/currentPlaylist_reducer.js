import { RECEIVE_CURRENT_PLAYLIST} from '../actions/playlist_actions';

const currentPlaylistReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_PLAYLIST:
            return Object.assign({},state,{currentPlaylist: action.currentPlaylist})
        default:
            return state;
    }
}

export default currentPlaylistReducer;