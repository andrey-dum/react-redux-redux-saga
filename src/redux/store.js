import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import apiReducer from './reducer'

const composeEnchancers  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const reducers = combineReducers({
    api: apiReducer
});

export const store = createStore(reducers, composeEnchancers());