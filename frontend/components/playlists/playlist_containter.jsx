import { connect } from 'react-redux';
import PlaylistForm from './playlist_form';
import {getCurrentUser} from '../../actions/session_actions';
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
        getPlaylist: playlistId => dispatch(getPlaylist(playlistId)),
        getPlaylists: () => dispatch(getPlaylists()),
        deletePlaylist: playlist => dispatch(noMorePlaylist(playlist)),
        fetchPlaysongs: playsongs => dispatch(getPlaysongs(playsongs)),
    }
};
export default connect(mSTP, mDTP)(PlaylistForm);