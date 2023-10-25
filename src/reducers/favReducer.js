import { DELETE_FAVORITES, ADD_FAVORITES } from "../actions/favActions";

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
    default:
      return state;
  }
};

export default reducer;