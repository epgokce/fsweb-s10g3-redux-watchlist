import movieReducer from "../reducers/movieReducer";
import favMovieReducer from "../reducers/favMovieReducer";
import { combineReducers } from "redux";
export const reducers = combineReducers({
  movies: movieReducer,
  FavMovies: favMovieReducer,
});