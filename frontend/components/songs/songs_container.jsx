import { connect } from 'react-redux';

const mSTP = state => ({
    songs: state.entities.songs
})

const mDTP = dispatch => ({
    getSong: songId => dispatch(getSong(songId)),
    getSongs: () => dispatch(getSongs())
});

export default connect(mSTP,mDTP)(SongsComponent);