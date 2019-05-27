import { GET_USERS, POST_USERS, PUT_USERS, DELETE_USERS} from '../constants/actions'

const initState = {

}

function usersReducer(state = initState, action){
    switch (action.type) {
        case GET_USERS : {
            return {...state}
        }
        case POST_USERS : {
            return {...state}
        }
        case PUT_USERS : {
            return {...state}
        }
        case DELETE_USERS : {
            return {...state}
        }
        default:
            return state
    }
}

export default usersReducer;

