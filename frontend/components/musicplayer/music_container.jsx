import { connect } from 'react-redux';
import MusicComponent from './music_component';
import {getSong, getSongs, playPause, currVol} from '../../actions/music_actions';

const mSTP = state => {
    return{
    currentUser: state.entities.users[state.session.currentUser],
    currentSong: state.session.currentSong,
    isPlaying: state.session.isPlaying,
    currentVolume: state.session.currentVolume
    }
}
const mDTP = dispatch => ({
    getSong: songId => dispatch(getSong(songId)),
    getSongs: () => dispatch(getSongs()),
    playPause: () => dispatch(playPause),
    currVol: (vol) => dispatch(currVol(vol))
});

export default connect(mSTP,mDTP)(MusicComponent);