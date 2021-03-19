import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';

const mSTP = state => ({
    user: state.users,
    errors: state.errors
})

const mDTP = dispatch => ({
  action: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(LoginForm);