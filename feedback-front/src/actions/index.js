import { bindActionCreators } from 'redux';
import * as usersAction from './users'
import * as documentsAction from './documents'
import * as coursesAction from './documents'
import * as conversationsAction from './conversations'
import * as commentsAction from './comments'
import * as authActions from './auth'

export default dispatch => ({
    actions: bindActionCreators({
        ...authActions,
        ...usersAction,
        ...documentsAction,
        ...coursesAction,
        ...commentsAction,
        ...conversationsAction
    }, dispatch)
});
