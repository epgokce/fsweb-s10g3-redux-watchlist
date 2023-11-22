import { applyMiddleware, legacy_createStore as createStore} from "redux";
import reducer from "../reducers/index";
import logger from "redux-logger";
import { movieWare } from "./middleware/favMovieMiddleware";

const store = createStore(
    reducer, applyMiddleware(movieWare, logger)  
    );

export default store;