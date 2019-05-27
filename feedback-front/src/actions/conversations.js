import { GET_CONVERSATIONS, GET_MESSAGES, POST_MESSAGES, POST_CONVERSATIONS, DELETE_CONVERSATIONS} from '../constants/actions'

export const getConversations = (data) =>{
    return { type: GET_CONVERSATIONS, payload: data}
}

export const getMessages = (data) => {
    return { type: GET_MESSAGES, payload: data}
}

export const postMessages = (data) => {
    return {type: POST_MESSAGES, payload: data}
}

export const postConversations = (data) => {
    return {type: POST_CONVERSATIONS, payload: data}
}

export const deleteConversations = (data) => {
    return {type: DELETE_CONVERSATIONS, payload: data}
}