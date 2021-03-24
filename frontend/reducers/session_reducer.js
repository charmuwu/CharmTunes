import { RECEIVE_CURRENT_SONG } from "../actions/music_actions";
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";
const _nullSession = {
    currentUser: null
}
const sessionReducer = (state=_nullSession, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {currentUser: action.user.id})
        case RECEIVE_CURRENT_SONG:
            return Object.assign({}, state, {currentSong: action.song})
        case LOGOUT_CURRENT_USER:
            return _nullSession
        default:
            return state;
    }
}

export default sessionReducer;