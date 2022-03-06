import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import apiReducer from './reducer';
import apiSaga from './saga'

const composeEnchancers  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const reducers = combineReducers({
    api: apiReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, composeEnchancers(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(apiSaga)
 
export default store

