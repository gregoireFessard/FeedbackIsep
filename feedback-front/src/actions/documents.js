import {GET_DOCUMENTS, POST_DOCUMENTS, DELETE_DOCUMENTS} from '../constants/actions'

export const getDocuments = (data) => {
    return {type: GET_DOCUMENTS, payload: data}
}

export const postDocuments = (data) => {
    return {type: POST_DOCUMENTS, payload: data}
}

export const deleteDocuments = (data) =>{
    return {type: DELETE_DOCUMENTS, payload: data}
}