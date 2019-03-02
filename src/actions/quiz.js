import axios from 'axios';
import {
    GET_QUIZZES,
    GET_QUIZZES_SUCCESS,
    GET_QUIZZES_FAILED,
    GET_QUIZ_SUMMARY,
    GET_QUIZ_SUMMARY_SUCCESS,
    GET_QUIZ_SUMMARY_FAILED,
    GENERATE_QUIZ_SUMMARY,
    GENERATE_QUIZ_SUMMARY_SUCCESS,
    GENERATE_QUIZ_SUMMARY_FAILED,
    GET_QUIZ_SUMMARIES,
    GET_QUIZ_SUMMARIES_SUCCESS,
    GET_QUIZ_SUMMARIES_FAILED
} from "../constants";

const API_HOST_URL = `${process.env.REACT_APP_API_URL}`

export function getQuizzes() {
    return (dispatch) => {

        dispatch({ type: GET_QUIZZES });

        return axios.get(`${API_HOST_URL}/quiz/getQuizzes`)
            .then((result) => {
                const { data } = result;
                dispatch({ type: GET_QUIZZES_SUCCESS, payload: data });
            })
            .catch((error) => {
                dispatch({ type: GET_QUIZZES_FAILED, payload: error.response.data });
            });
    }
}

export function getQuizSummaries() {
    return (dispatch) => {

        dispatch({ type: GET_QUIZ_SUMMARIES });

        return axios.get(`${API_HOST_URL}/quiz/getQuizSummaries`)
            .then((result) => {
                const { data } = result;
                dispatch({ type: GET_QUIZ_SUMMARIES_SUCCESS, payload: data });
            })
            .catch((error) => {
                dispatch({ type: GET_QUIZ_SUMMARIES_FAILED, payload: error.response.data });
            });
    }
}

export function getQuizSummary(userid, quizid) {
    return (dispatch) => {

        dispatch({ type: GET_QUIZ_SUMMARY });

        return axios.get(`${API_HOST_URL}/quiz/getQuizSummary/${userid}/${quizid}`)
            .then((result) => {
                const { data } = result;
                dispatch({ type: GET_QUIZ_SUMMARY_SUCCESS, payload: data });
            })
            .catch((error) => {
                dispatch({ type: GET_QUIZ_SUMMARY_FAILED, payload: error.response.data });
            });
    }
}

export function generateQuizSummary(userid, quizid) {
    return (dispatch) => {

        dispatch({ type: GENERATE_QUIZ_SUMMARY });

        return axios.post(`${API_HOST_URL}/quiz/generateQuizSummary`, { userid, quizid })
            .then((result) => {
                const { data } = result;
                dispatch({ type: GENERATE_QUIZ_SUMMARY_SUCCESS, payload: data });
            })
            .catch((error) => {
                dispatch({ type: GENERATE_QUIZ_SUMMARY_FAILED, payload: error.response.data });
            });
    }
}
