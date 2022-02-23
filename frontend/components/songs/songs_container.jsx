import { connect } from 'react-redux';
import SongsComponent from './songs_component';
import {getSongs, getSong} from '../../actions/music_actions';
import AddSongs from './add_songs_component';

const mSTP = state => ({
    songs: state.entities.songs
})

const mDTP = dispatch => ({
    getSong: songId => dispatch(getSong(songId)),
    getSongs: () => dispatch(getSongs()),
    //createPlaySong: () => dispatch(makePlaySong())
});

export default connect(mSTP,mDTP)(SongsComponent);
// export default connect(mSTP,mDTP)(AddSongs);