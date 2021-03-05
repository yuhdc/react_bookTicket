import { combineReducers, createStore } from "redux";
import nStudent from './studentReducer'

const reducer = combineReducers({
    nStudent
})

export const store = createStore(reducer, 
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );