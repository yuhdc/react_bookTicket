import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import courseReducer from './courseReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
    courseReducer
})

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));