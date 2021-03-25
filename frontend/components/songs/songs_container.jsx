import { connect } from 'react-redux';
import SongsComponent from './songs_component';
import {getSongs, getSong} from '../../actions/music_actions';

const mSTP = state => ({
    songs: state.entities.songs
})

const mDTP = dispatch => ({
    getSong: songId => dispatch(getSong(songId)),
    getSongs: () => dispatch(getSongs())
});

export default connect(mSTP,mDTP)(SongsComponent);