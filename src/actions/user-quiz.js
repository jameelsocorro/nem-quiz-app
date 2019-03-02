import axios from 'axios';
import {
    GENERATE_USER_QUIZZES,
    GENERATE_USER_QUIZZES_SUCCESS,
    GENERATE_USER_QUIZZES_FAILED,
    HAS_USER_QUIZ,
    HAS_USER_QUIZ_SUCCESS,
    HAS_USER_QUIZ_FAILED,
    GET_USER_QUIZZES,
    GET_USER_QUIZZES_SUCCESS,
    GET_USER_QUIZZES_FAILED,
    GET_USER_QUIZ_ITEMS,
    GET_USER_QUIZ_ITEMS_SUCCESS,
    GET_USER_QUIZ_ITEMS_FAILED,
    GET_CURRENT_USER_QUIZ,
    GET_CURRENT_USER_QUIZ_SUCCESS,
    GET_CURRENT_USER_QUIZ_FAILED,
    UPDATE_USER_QUIZ_ANSWER,
    UPDATE_USER_QUIZ_ANSWER_SUCCESS,
    UPDATE_USER_QUIZ_ANSWER_FAILED
} from "../constants";

const API_HOST_URL = `${process.env.REACT_APP_API_URL}`

export function generateRandomUserQuizzes(userid, quizid) {
    return (dispatch) => {

        dispatch({ type: GENERATE_USER_QUIZZES });

        return axios.post(`${API_HOST_URL}/userQuiz/generateUserQuizzes`, { userid, quizid })
            .then((result) => {
                const { data } = result;
                dispatch({ type: GENERATE_USER_QUIZZES_SUCCESS, payload: data });
            })
            .catch((error) => {
                dispatch({ type: GENERATE_USER_QUIZZES_FAILED, payload: error.response.data });
            });
    }
}

export function getUserQuizzes(userid, quizid, summary = false) {
    return (dispatch) => {

        dispatch({ type: GET_USER_QUIZZES });

        return axios.get(`${API_HOST_URL}/userQuiz/getUserQuizzes/${userid}/${quizid}/${summary}`)
            .then((result) => {
                const { data } = result;
                dispatch({ type: GET_USER_QUIZZES_SUCCESS, payload: data });
            })
            .catch((error) => {
                dispatch({ type: GET_USER_QUIZZES_FAILED, payload: error.response.data });
            });
    }
}

export function getCurrentUserQuiz(userid, quizid) {
    return (dispatch) => {

        dispatch({ type: GET_CURRENT_USER_QUIZ });

        return axios.get(`${API_HOST_URL}/userQuiz/getCurrentUserQuiz/${userid}/${quizid}`)
            .then((result) => {
                const { data } = result;
                dispatch({ type: GET_CURRENT_USER_QUIZ_SUCCESS, payload: data });
            })
            .catch((error) => {
                dispatch({ type: GET_CURRENT_USER_QUIZ_FAILED, payload: error.response.data });
            });
    }
}

export function getUserQuizItems(userquizid) {
    return (dispatch) => {

        dispatch({ type: GET_USER_QUIZ_ITEMS });

        return axios.get(`${API_HOST_URL}/userQuiz/getUserQuizItems/${userquizid}`)
            .then((result) => {
                const { data } = result;
                dispatch({ type: GET_USER_QUIZ_ITEMS_SUCCESS, payload: data });
            })
            .catch((error) => {
                dispatch({ type: GET_USER_QUIZ_ITEMS_FAILED, payload: error.response.data });
            });
    }
}

export function validateUserQuiz(userid, quizid) {
    return (dispatch) => {

        dispatch({ type: HAS_USER_QUIZ });

        return axios.post(`${API_HOST_URL}/userQuiz/hasUserQuiz`, { userid, quizid })
            .then((result) => {
                const { data } = result;
                dispatch({ type: HAS_USER_QUIZ_SUCCESS, payload: data });
            })
            .catch((error) => {
                dispatch({ type: HAS_USER_QUIZ_FAILED, payload: error.response.data });
            });
    }
}

export function updateUserQuizAnswer(userquizid, quizitemid, useranswer) {
    return (dispatch) => {

        dispatch({ type: UPDATE_USER_QUIZ_ANSWER });

        return axios.post(`${API_HOST_URL}/userQuiz/updateUserQuizAnswer`, { userquizid, quizitemid, useranswer })
            .then((result) => {
                const { data } = result;
                dispatch({ type: UPDATE_USER_QUIZ_ANSWER_SUCCESS, payload: data });
            })
            .catch((error) => {
                dispatch({ type: UPDATE_USER_QUIZ_ANSWER_FAILED, payload: error.response.data });
            });
    }
}

