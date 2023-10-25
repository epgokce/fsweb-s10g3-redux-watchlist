import { legacy_createStore as createStore, applyMiddleware} from "redux";
import reducer from "./reducers/index";
import logger from "redux-logger";
import { myLogger } from "./middlewares/middleware";

const store = createStore(
    reducer,
    applyMiddleware(myLogger, logger)    
    );

export default store;