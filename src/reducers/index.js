/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */
import { combineReducers } from 'redux';
import CustomReducer from './custom-reducer';

const combinedReducers = combineReducers({
    custom: CustomReducer,
});

export default combinedReducers;

// WEBPACK FOOTER //
// ./src/reducers/index.js