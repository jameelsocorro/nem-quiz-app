import axios from 'axios';
import {
    GET_QUIZ_ITEMS,
    GET_QUIZ_ITEMS_SUCCESS,
    GET_QUIZ_ITEMS_FAILED,
    GET_QUIZZES,
    GET_QUIZZES_SUCCESS,
    GET_QUIZZES_FAILED
} from "../constants";

const API_HOST_URL = `${process.env.REACT_APP_API_URL}`

export function getQuizzes() {
    return (dispatch) => {

        dispatch({ type: GET_QUIZZES });

        return axios.post(`${API_HOST_URL}/quiz/getQuizzes`)
            .then((result) => {
                const { data } = result;
                dispatch({ type: GET_QUIZZES_SUCCESS, payload: data });
            })
            .catch((error) => {
                dispatch({ type: GET_QUIZZES_FAILED, payload: error.response.data });
            });
    }
}

export function getQuizItems() {
    return (dispatch) => {

        dispatch({ type: GET_QUIZ_ITEMS });

        return axios.post(`${API_HOST_URL}/quiz/getQuizItems`)
            .then((result) => {
                const { data } = result;
                dispatch({ type: GET_QUIZ_ITEMS_SUCCESS, payload: data });
            })
            .catch((error) => {
                dispatch({ type: GET_QUIZ_ITEMS_FAILED, payload: error.response.data });
            });
    }
}
