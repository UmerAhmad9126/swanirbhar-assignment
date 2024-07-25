import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionType"


const loginRequestAction = () => {
    return { type: LOGIN_REQUEST }
}


const loginFailureAction = () => {
    return { type: LOGIN_FAILURE }
}



const loginSuccesAction = (payload) => {
    return { type: LOGIN_SUCCESS, payload }
}


export const login = (payload) => (dispatch) => {

    dispatch(loginRequestAction());
    axios.post("http://localhost:8080/auth/login", payload)
        .then((res) => {
            console.log('res:', res);
            dispatch(loginSuccesAction(res.data.token));
        })
        .catch((err) => {
            console.log('err:', err);
            dispatch(loginFailureAction());
        })
}




