import { RECEIVE_CURRENT_SONG, IS_PLAYING } from "../actions/music_actions";
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";
const _nullSession = {
    currentUser: null,
    songPlaying: false,
}
const sessionReducer = (state=_nullSession, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {currentUser: action.user.id})
        case RECEIVE_CURRENT_SONG:
            const nextState = {currentSong: action.song, isPlaying: true}
            return Object.assign({}, state, nextState )
        case IS_PLAYING:
            debugger
            return Object.assign({},state, {isPlaying: !state.isPlaying})
        case LOGOUT_CURRENT_USER:
            return _nullSession
        default:
            return state;
    }
}

export default sessionReducer;