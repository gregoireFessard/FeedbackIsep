import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import usersReducer from './users'
import documentsReducer from './documents'
import coursesReducer from './courses'
import conversationsReducer from './conversations'
import authReducer from './auth'
import commentsReducer from './comments'
import { history } from '../history';

export default combineReducers({
    users: usersReducer,
    documents: documentsReducer,
    courses: coursesReducer,
    conversations: conversationsReducer,
    auth: authReducer,
    comments: commentsReducer,
    router: connectRouter(history)
});
