import { POST_LOGIN} from '../constants/actions'

const initState = {

}

function authReducer(state = initState, action){
    switch (action.type) {
        case POST_LOGIN: {
            return {...state}
        }
        default:
            return state
    }
}

export default authReducer;