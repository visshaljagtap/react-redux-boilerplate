import firebase from 'firebase';
import {
    CUSTOM_TYPE
} from './types';

export const customAction = (id) => {
    return (dispatch) => {
        var action = {
            type: CUSTOM_TYPE,
            payload: id
        }
        dispatch(action);
    };
};

