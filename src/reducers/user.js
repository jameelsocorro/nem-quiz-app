import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED,
    SIGN_IN_USER_SUCCESS,
    SIGN_IN_USER_FAILED
} from '../constants';

const INITIAL_STATE = {
    data: {},
    error: null
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case REGISTER_USER_SUCCESS:
        case SIGN_IN_USER_SUCCESS:
            return Object.assign({}, state, {
                data: action.payload,
                error: null
            });
        case REGISTER_USER_FAILED:
        case SIGN_IN_USER_FAILED:
            return Object.assign({}, state, {
                data: null,
                error: action.payload
            });
        default:
            return state;
    }
};
