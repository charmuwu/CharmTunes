import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import { signup, resetErrors } from '../../actions/session_actions';

const mSTP = state => {
  return{
    errors: state.errors.session,
  }
};

const mDTP = dispatch => {
  debugger
  return{
    action: user => dispatch(signup(user)),
    resetErrors: () => dispatch(resetErrors())
  }
};

export default connect(mSTP, mDTP)(SignUpForm);