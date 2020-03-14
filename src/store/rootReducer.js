import {combineReducers} from 'redux';
import counterReducer from "./reducers/counter";
import resultReducer from "./reducers/results";

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

export default rootReducer;