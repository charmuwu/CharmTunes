import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import musicReducer from "./music_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  songs: musicReducer,
});

export default entitiesReducer;