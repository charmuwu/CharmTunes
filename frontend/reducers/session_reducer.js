import { RECEIVE_CURRENT_SONG, IS_PLAYING, CURRENT_VOLUME } from "../actions/music_actions";
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
            const nextState = {currentSong: action.song, isPlaying: true, currentVolume: state.currentVolume || 0.5}
            return Object.assign({}, state, nextState )
        case IS_PLAYING:
            return Object.assign({}, state, {isPlaying: !state.isPlaying})
        case CURRENT_VOLUME:
            return Object.assign({}, state, {currentVolume: action.vol})
        case LOGOUT_CURRENT_USER:
            return _nullSession
        default:
            return state;
    }
}

export default sessionReducer;