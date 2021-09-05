import {applyMiddleware, combineReducers, createStore} from "redux";
import mainPageReducer from "./reducers/mainPageReducer";
import officeReducer from "./reducers/officeReducer";
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    mainPageReducer,
    officeReducer,
    authReducer
});

let ls = window.localStorage;
const store = createStore(rootReducer, applyMiddleware(thunk));
ls['store'] = JSON.stringify(store.getState())
//ls.clear();
//-------localStorage---------
//const store = createStore(rootReducer, JSON.parse(ls['store']));
//
// store.subscribe(() => {
//      ls['store'] = JSON.stringify(store.getState())
//  })

export default store;