import {
    CUSTOM_TYPE,
} from '../actions/types';

const INITIAL_STATE = {
   
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CUSTOM_TYPE:
            return action.payload
        default:
            return state;
    }
};

// WEBPACK FOOTER //
// ./src/reducers/auth-reducer.js