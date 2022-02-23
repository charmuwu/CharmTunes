import { combineReducers } from 'redux';
import sessionReducer from './session_reducer'
import entitiesReducer from './entities'
import errorsReducer from './errors_reducer'


export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    // playlists: playlistReducer, //uh refactor frontend components to pull from entities or some thing
    // songs: musicReducer, // same as whatever that says ^
    errors: errorsReducer
})