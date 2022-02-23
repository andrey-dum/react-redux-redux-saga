import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import apiReducer from './reducer'


const reducers = combineReducers({
    api: apiReducer
});

export const store = createStore(reducers);