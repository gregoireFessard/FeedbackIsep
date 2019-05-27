import { GET_USERS, GET_USERSBYID, POST_USERS, PUT_USERS, DELETE_USERS} from '../constants/actions'

export const getUsers = (data) =>{
    return { type: GET_USERS, payload: data}
}

export const getUsersById = (data) => {
    return { type: GET_USERSBYID, payload: data}
}

export const postUsers = (data) => {
    return {type: POST_USERS, payload: data}
}

export const putUsers = (data) => {
    return {type: PUT_USERS, payload: data}
}

export const deleteUsers = (data) => {
    return {type: DELETE_USERS, payload: data}
}

