import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import { login, signup, resetErrors } from '../../actions/session_actions';

const mSTP = state => {
  return{
    user: state.users,
    errors: state.errors.session,
  }
};

const mDTP = dispatch => {
  return{
    action: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    resetErrors: () => dispatch(resetErrors())
  }
};

export default connect(mSTP, mDTP)(SignUpForm);