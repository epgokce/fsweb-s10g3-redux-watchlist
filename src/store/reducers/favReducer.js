import { DELETE_FAVORITES, ADD_FAVORITES, RECYECLE_MOVIE, REMOVE_MOVIE } from "../actions/favActions";

const initialState = {
  favMovies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_FAVORITES:
      return {
        ...state,
        favMovies: [...state.favMovies, action.payload]
      };

    case DELETE_FAVORITES:
      return {
        favMovies: state.favMovies.filter(item => item.id !== action.payload)
      };

    case RECYECLE_MOVIE:
      return{...state, movies : [...state.movie, action.payload]
      };
      
    case REMOVE_MOVIE:
      return{...state, movies : state.movies.filter((movie) => movie.id !== action.payload.id),
      };
    default:
    
      
      return state;
  }
};

export default reducer;