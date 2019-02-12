import axios from 'axios';
import {
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED,
    SIGN_IN_USER,
    SIGN_IN_USER_SUCCESS,
    SIGN_IN_USER_FAILED
} from "../constants";

const API_HOST_URL = `${process.env.REACT_APP_API_URL}`

export function registerUser(user) {
    return (dispatch) => {

        dispatch({ type: REGISTER_USER });

        return axios.post(`${API_HOST_URL}/users/register`, user)
            .then((result) => {
                const { data } = result;
                dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
            })
            .catch((error) => {
                dispatch({ type: REGISTER_USER_FAILED, payload: error.response.data });
            });
    }
}

export function signIn(user) {
    return (dispatch) => {

        dispatch({ type: SIGN_IN_USER });

        return axios.post(`${API_HOST_URL}/users/signin`, user)
            .then((result) => {
                const { data } = result;
                console.log(result);
                dispatch({ type: SIGN_IN_USER_SUCCESS, payload: data });
            })
            .catch((error) => {
                dispatch({ type: SIGN_IN_USER_FAILED, payload: error.response.data });
            });
    }
}
