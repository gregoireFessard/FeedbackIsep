import { bindActionCreators } from 'redux';

export default dispatch => ({
    actions: bindActionCreators({
    }, dispatch)
});
