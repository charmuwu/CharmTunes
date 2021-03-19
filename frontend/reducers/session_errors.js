import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, RESET_ERRORS } from "../actions/session_actions";

const _nullErrors = [];
const sessionErrorsReducer = (state=[], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ERRORS:
            return Object.assign([],action.errors);
        case RECEIVE_CURRENT_USER:
            return _nullErrors
        case RESET_ERRORS:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer;