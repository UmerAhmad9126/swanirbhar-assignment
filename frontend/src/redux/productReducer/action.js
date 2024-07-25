import { DELETE_RESUME_DATA_SUCCESS, GET_RESUME_DATA_SUCCESS, PATCH_RESUME_DATA_SUCCESS, POST_RESUME_DATA_SUCCESS, RESUME_DATA_FAILURE, RESUME_DATA_REQUEST } from "../actionType"

const resumeDataRequestAction = () => {
    return { type: RESUME_DATA_REQUEST }
}


const resumeDataFailureAction = () => {
    return { type: RESUME_DATA_FAILURE }
}

const postResumeDataSuccessAction = (payload) => {
    return { type: POST_RESUME_DATA_SUCCESS, payload }
}


const getResumeDataSuccessAction = () => {
    return { type: GET_RESUME_DATA_SUCCESS }
}


const patchResumeDataSuccessAction = (payload) => {
    return { type: PATCH_RESUME_DATA_SUCCESS, payload }
}

const deleteResumeDataSuccessAction = () => {
    return { type: DELETE_RESUME_DATA_SUCCESS, payload }
}
