import { connect } from 'react-redux';
import MusicComponent from './music_component';
import {getSong, getSongs} from '../../actions/music_actions';

const mSTP = state => {
    debugger
    return{
    currentUser: state.entities.users[state.session.currentUser],
    songs: state.entities.songs
    }
}
const mDTP = dispatch => ({
    getSong: songId => dispatch(getSong(songId)),
    getSongs: () => dispatch(getSongs())
});

export default connect(mSTP,mDTP)(MusicComponent);