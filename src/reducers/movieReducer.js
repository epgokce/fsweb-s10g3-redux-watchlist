import { movies } from "../../movies";
const movieInitial = movies;

const reducer = (state = movieInitial, action) => {
  const { type, payload } = action;
  switch (type) {
    case "":
      break;

    default:
      return state;
  }
};

export default reducer;