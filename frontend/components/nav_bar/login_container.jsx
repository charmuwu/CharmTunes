import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, resetErrors } from '../../actions/session_actions';

const mSTP = state => ({
    user: state.users,
    errors: state.errors.session
})

const mDTP = dispatch => ({
  action: user => dispatch(login(user)),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(mSTP, mDTP)(LoginForm);