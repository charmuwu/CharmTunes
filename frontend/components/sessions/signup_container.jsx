import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import { signup } from '../../actions/session_actions';

const mDTP = dispatch => ({
  action: user => dispatch(signup(user))
});

export default connect(null, mDTP)(SignUpForm);