import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SignUpForm from './signup_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  user: {
    username: '',
    email: '',
  },
  formType: 'Sign Up'
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);