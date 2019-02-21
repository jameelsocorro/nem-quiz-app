import {
    GET_QUIZ_ITEMS_SUCCESS,
    GET_QUIZ_ITEMS_FAILED,
    GET_QUIZZES_SUCCESS,
    GET_QUIZZES_FAILED
} from '../constants';

const INITIAL_STATE = {
    quizzes: [],
    quizItems: [],
    error: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_QUIZZES_SUCCESS:
            return Object.assign({}, state, {
                quizzes: action.payload,
                error: null
            });
        case GET_QUIZ_ITEMS_SUCCESS:
            return Object.assign({}, state, {
                quizItems: action.payload,
                error: null
            });
        case GET_QUIZZES_FAILED:
            return Object.assign({}, state, {
                quizzes: null,
                error: action.payload
            });

        case GET_QUIZ_ITEMS_FAILED:
            return Object.assign({}, state, {
                quizItems: null,
                error: action.payload
            });
        default:
            return state;
    }
};
