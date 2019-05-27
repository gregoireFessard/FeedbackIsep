import {GET_COURSES, POST_COURSES} from '../constants/actions'


const initState = {

}
function coursesReducer (state= initState, action){
    switch (action.type) {
        case GET_COURSES:{
            return {...state}
        }
        case POST_COURSES:{
            return {...state}
        }
        default:
            return state
    }
}

export default coursesReducer;