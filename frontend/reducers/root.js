import { combineReducers } from 'redux';
import sessionReducer from './session_reducer'
import entitiesReducer from './entities'
import errorsReducer from './errors_reducer'
import playlistReducer from './playlist_reducer';
import musicReducer from './music_reducer';

export default combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    playlists: playlistReducer,
    songs: musicReducer,
    errors: errorsReducer
})