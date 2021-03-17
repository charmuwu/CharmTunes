import { combineReducers } from 'redux';
import sessionReducer from './session_reducer'
import entitiesReducer from './entities'
import errorsReducer from './errors_reducer'

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer
})