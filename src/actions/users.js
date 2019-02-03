import axios from 'axios';
import { REGISTER_USER } from "../constants";

const API_HOST_URL = `${process.env.REACT_APP_API_URL}`

export function registerUser(user) {
    return (dispatch) => {

        return axios.post(`${API_HOST_URL}/users/register`, user)
            .then((result) => {
                const { data } = result;
                dispatch({
                    type: REGISTER_USER,
                    payload: data
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
