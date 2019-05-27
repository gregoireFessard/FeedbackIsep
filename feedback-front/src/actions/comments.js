import { GET_COMMENTS, POST_COMMENTS, POST_LIKE, POST_DISLIKE, POST_REPLY, PUT_COMMENTS} from '../constants/actions'

export const getComments = (data) => {
    return { type : GET_COMMENTS, payload: data}
}

export const postComments = (data) => {
    return { type: POST_COMMENTS, payload: data}
}

export const postLike = (data) => {
    return {type: POST_LIKE, payload: data}
}

export const postDislike = (data) => {
    return {type: POST_DISLIKE, payload: data}
}

export const postReply = (data) => {
    return {type: POST_REPLY, payload: data}
}

export const putComments = (data) => {
    return { type: PUT_COMMENTS, payload: data}
}