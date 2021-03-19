import { connect } from 'react-redux';
import {logout} from '../../actions/session_actions';
import SplashComponent from './splash_component';

const mSTP = state => {
    return{
        currentUser: state.entities.users[state.session.currentUser],
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
})

export default connect(mSTP,mDTP)(SplashComponent)