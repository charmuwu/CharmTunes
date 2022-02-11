import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import musicReducer from "./music_reducer";
import playlistReducer from "./playlist_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: musicReducer,
  playlists: playlistReducer,
});

export default entitiesReducer;