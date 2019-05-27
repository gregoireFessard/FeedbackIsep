import { GET_CONVERSATIONS, GET_MESSAGES, POST_CONVERSATIONS, POST_MESSAGES, DELETE_CONVERSATIONS} from '../constants/actions'

const initState = {

}

function messagesReducer(state = initState, action){
    switch (action.type) {
        case GET_CONVERSATIONS: {
            return {...state}
        }
        case GET_MESSAGES: {
            return {...state}
        }
        case POST_CONVERSATIONS: {
            return {...state}
        }
        case POST_MESSAGES: {
            return {...state}
        }
        case DELETE_CONVERSATIONS: {
            return {...state}
        }
        default:
            return state
    }
}

export default messagesReducer;