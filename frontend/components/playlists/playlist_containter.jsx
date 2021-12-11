import { connect } from 'react-redux';
import PlaylistForm from './playlist_form';
import {getPlaysongs, getPlaylist, getPlaylists, newPlaylist, noMorePlaylist} from '../../actions/playlist_actions';

const mSTP = state => {
    return{
        playlists: state.playlists,
        user: state.users,
        errors: state.errors.session,
    }
};
const mDTP = dispatch => {
    return{
        createPlaylist: formPlaylist => dispatch(newPlaylist(formPlaylist)),
        deletePlaylist: playlist => dispatch(noMorePlaylist(playlist)),
        fetchPlaysongs: playsongs => dispatch(getPlaysongs(playsongs)),
    }
};
export default connect(mSTP, mDTP)(PlaylistForm);