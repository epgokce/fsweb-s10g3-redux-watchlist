import { movies } from "../../movies";
const movieInitial = {
  sira: 0,
  movies: movies,
};

const reducer = (state = movieInitial, action) => {
  const { type, payload } = action;
  switch (type) {
    case "NEXT_SİRA":
      return {
        ...state,
        sira: state.sira + 1,
      };

    case "PREV_SİRA":
      return {
        ...state,
        sira: state.sira - 1,
      };

    default:
      return state;
  }
};

export default reducer;