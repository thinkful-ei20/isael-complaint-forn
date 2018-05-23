import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    form: formReducer
});


export default createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))    
)