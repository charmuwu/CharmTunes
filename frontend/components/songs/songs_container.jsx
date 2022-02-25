import { connect } from 'react-redux';
import SongsComponent from './songs_component';
import AddSongs from './add_songs_component';
import {getSongs, getSong} from '../../actions/music_actions';
import {createPlaysong} from '../../actions/playsong_actions';

const mSTP = state => ({
    songs: state.entities.songs
})

const mDTP = dispatch => ({
    getSong: songId => dispatch(getSong(songId)),
    getSongs: () => dispatch(getSongs()),
    createPlaysong: (playlistId, songId) => dispatch(createPlaysong(playlistId, songId)),
});

export default {
    AddSongs: connect(mSTP, mDTP)(AddSongs),
    SongsComponent: connect(mSTP, mDTP)(SongsComponent)
};
// export default connect(mSTP,mDTP)(AddSongs);