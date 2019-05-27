import {
    GET_COURSES,
    POST_COURSES
} from '../constants/actions'

export const getCourses = (data) => {
    return {type: GET_COURSES, payload: data}
}

export const postCourses = (data) =>{
    return {type: POST_COURSES, payload: data}
}