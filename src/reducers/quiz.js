import {
    GET_QUIZZES_SUCCESS,
    GET_QUIZZES_FAILED,
    GET_QUIZ_SUMMARY_FAILED,
    GET_QUIZ_SUMMARY_SUCCESS,
    GENERATE_QUIZ_SUMMARY_SUCCESS,
    GENERATE_QUIZ_SUMMARY_FAILED,
    GET_QUIZ_SUMMARIES_SUCCESS,
    GET_QUIZ_SUMMARIES_FAILED
} from '../constants';

const INITIAL_STATE = {
    quizzes: [],
    quizSummary: null,
    quizSummaries: [],
    generateSuccess: false,
    error: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_QUIZZES_SUCCESS:
            return Object.assign({}, state, {
                quizzes: action.payload,
                error: null
            });
        case GET_QUIZZES_FAILED:
            return Object.assign({}, state, {
                quizzes: null,
                error: action.payload
            });
        case GET_QUIZ_SUMMARIES_SUCCESS:
            return Object.assign({}, state, {
                quizSummaries: action.payload,
                error: null
            });
        case GET_QUIZ_SUMMARIES_FAILED:
            return Object.assign({}, state, {
                quizSummaries: null,
                error: action.payload
            });
        case GET_QUIZ_SUMMARY_SUCCESS:
            return Object.assign({}, state, {
                quizSummary: action.payload,
                error: null
            });
        case GET_QUIZ_SUMMARY_FAILED:
            return Object.assign({}, state, {
                quizSummary: null,
                error: action.payload
            });
        case GENERATE_QUIZ_SUMMARY_SUCCESS:
            return Object.assign({}, state, {
                generateSuccess: action.payload,
                error: null
            });
        case GENERATE_QUIZ_SUMMARY_FAILED:
            return Object.assign({}, state, {
                generateSuccess: false,
                error: action.payload
            });
        default:
            return state;
    }
};
