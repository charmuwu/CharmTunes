import { RECEIVE_CURRENT_SONG } from '../actions/music_actions';

const musicReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_SONG:
            return Object.assign({},state, {[action.song.id]: action.song})
        default:
            return state;
    }
}
export default musicReducer;