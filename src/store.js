import {createStore, applyMiddleware} from 'redux';
// import { composeWithDevTools } from  'redux-devtools-extension'; // removed for production 
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(...middleware)
    // composeWithDevTools(applyMiddleware(...middleware))   // removed for production 
);

export default store;