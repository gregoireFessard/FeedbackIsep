import { POST_COMMENTS, GET_COMMENTS, PUT_COMMENTS, POST_REPLY, POST_LIKE, POST_DISLIKE} from '../constants/actions'

const initState = {

}
function commentsReducer(state = initState, action){
    switch (action.type) {
        case GET_COMMENTS:{
            return {...state}
        }
        case POST_COMMENTS:{
            return {...state}
        }
        case PUT_COMMENTS:{
            return {...state}
        }
        case POST_LIKE:{
            return {...state}
        }
        case POST_DISLIKE:{
            return {...state}
        }
        case POST_REPLY:{
            return {...state}
        }
        default:
            return state
    }
}

export default commentsReducer;