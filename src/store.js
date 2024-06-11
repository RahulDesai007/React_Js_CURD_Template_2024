import { applyMiddleware } from 'redux';
import {legacy_createStore as createStore} from 'redux'
import rootReducer from "./reducers/index";
import {thunk} from 'redux-thunk';

//injecting redux thunk
const store = createStore(
    rootReducer,
    applyMiddleware(thunk));

export default store;