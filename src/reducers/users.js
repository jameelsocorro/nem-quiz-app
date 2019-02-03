import { REGISTER_USER } from '../constants';

const INITIAL_STATE = {
    user: {}
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case REGISTER_USER:
            return Object.assign({}, state, {
                user: action.payload
            });
        default:
            return state;
    }
};
