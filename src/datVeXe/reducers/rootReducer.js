import { createStore, combineReducers } from 'redux';
import { DanhSachGheReducer } from './DanhSachGheReducer';
import { DSGDDReducer } from './DSGDDReducer';


const reducer = combineReducers({
    //state store
    DanhSachGheReducer,
    DSGDDReducer,
})

export const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);