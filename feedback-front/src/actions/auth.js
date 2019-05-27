import { POST_LOGIN } from '../constants/actions'
import axiosInstance from '../api/requestBuilder'

export const postLogin = (data) => {
    try {
        axiosInstance.post("/login")

    } catch (e) {
        console.log(e)
    }
    return {type: data, payload: data}
}
