import {
    GENERATE_USER_QUIZZES_SUCCESS,
    GENERATE_USER_QUIZZES_FAILED,
    HAS_USER_QUIZ_SUCCESS,
    HAS_USER_QUIZ_FAILED,
    GET_USER_QUIZZES_SUCCESS,
    GET_USER_QUIZZES_FAILED,
    GET_USER_QUIZ_ITEMS_SUCCESS,
    GET_USER_QUIZ_ITEMS_FAILED,
    GET_CURRENT_USER_QUIZ_SUCCESS,
    GET_CURRENT_USER_QUIZ_FAILED,
    UPDATE_USER_QUIZ_ANSWER_SUCCESS,
    UPDATE_USER_QUIZ_ANSWER_FAILED
} from '../constants';

const INITIAL_STATE = {
    userQuizzes: [],
    currentUserQuiz: null,
    userQuizItems: [],
    hasUserQuiz: false,
    generateSuccess: false,
    updateAnswerSuccess: false,
    error: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GENERATE_USER_QUIZZES_SUCCESS:
            return Object.assign({}, state, {
                generateSuccess: action.payload,
                error: null
            });
        case GENERATE_USER_QUIZZES_FAILED:
            return Object.assign({}, state, {
                generateSuccess: false,
                error: action.payload
            });
        case HAS_USER_QUIZ_SUCCESS:
            return Object.assign({}, state, {
                hasUserQuiz: action.payload,
                error: null
            });
        case HAS_USER_QUIZ_FAILED:
            return Object.assign({}, state, {
                hasUserQuiz: false,
                error: action.payload
            });
        case GET_USER_QUIZZES_SUCCESS:
            return Object.assign({}, state, {
                userQuizzes: action.payload,
                error: null
            });
        case GET_USER_QUIZZES_FAILED:
            return Object.assign({}, state, {
                userQuizzes: null,
                error: action.payload
            });
        case GET_CURRENT_USER_QUIZ_SUCCESS:
            return Object.assign({}, state, {
                currentUserQuiz: action.payload,
                error: null
            });
        case GET_CURRENT_USER_QUIZ_FAILED:
            return Object.assign({}, state, {
                currentUserQuiz: null,
                error: action.payload
            });
        case GET_USER_QUIZ_ITEMS_SUCCESS:
            return Object.assign({}, state, {
                userQuizItems: action.payload,
                error: null
            });
        case GET_USER_QUIZ_ITEMS_FAILED:
            return Object.assign({}, state, {
                userQuizItems: null,
                error: action.payload
            });
        case UPDATE_USER_QUIZ_ANSWER_SUCCESS:
            return Object.assign({}, state, {
                updateAnswerSuccess: action.payload,
                error: null
            });
        case UPDATE_USER_QUIZ_ANSWER_FAILED:
            return Object.assign({}, state, {
                updateAnswerSuccess: null,
                error: action.payload
            });
        default:
            return state;
    }
};
