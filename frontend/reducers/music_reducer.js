import { RECEIVE_SONGS } from '../actions/music_actions';

const musicReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SONGS:
            return Object.assign({}, state, action.songs);
        default:
            return state;
    }
}
export default musicReducer;