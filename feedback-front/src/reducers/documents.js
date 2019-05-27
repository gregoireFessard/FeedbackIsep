import { GET_DOCUMENTS, POST_DOCUMENTS, DELETE_DOCUMENTS} from '../constants/actions'


const initState = {

}

function documentsReducer(state = initState, action){
    switch (action.type) {
        case GET_DOCUMENTS: {
            return {...state}
        }
        case POST_DOCUMENTS: {
            return {...state}
        }
        case DELETE_DOCUMENTS: {
            return {...state}
        }
        default:
            return state
    }
}

export default documentsReducer;