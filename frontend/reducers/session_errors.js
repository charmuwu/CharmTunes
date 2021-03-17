import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";

const _nullErrors = {
    errors: null
}
const sessionErrorsReducer = (state={}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ERRORS:
            return Object.assign({}, {errors: action.errors})
        case RECEIVE_CURRENT_USER:
            return _nullErrors
        default:
            return state;
    }
}

export default sessionErrorsReducer;