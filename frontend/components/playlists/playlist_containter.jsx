import { connect } from 'react-redux';
import PlaylistForm from './playlist_form';
import PlaylistShow from './playlist_show';
import {getCurrentUser} from '../../actions/session_actions';
import {getPlaysongs, getPlaylist, getPlaylists, newPlaylist, noMorePlaylist, updatePlaylist} from '../../actions/playlist_actions';

const mSTP = state => {
    return{
        playlists: state.playlists,
        user: state.users,
        errors: state.errors.session,
        currentPlaylistId: state.entities.currentPlaylistId,
    }
};
const mDTP = dispatch => {
    return{
        createPlaylist: formPlaylist => dispatch(newPlaylist(formPlaylist)),
        updatePlaylist: (formPlaylist, id) => dispatch(updatePlaylist(formPlaylist, id)),
        getPlaylist: playlistId => dispatch(getPlaylist(playlistId)),
        getPlaylists: () => dispatch(getPlaylists()),
        deletePlaylist: playlist => dispatch(noMorePlaylist(playlist)),
        fetchPlaysongs: playsongs => dispatch(getPlaysongs(playsongs)),
    }
};
// export default connect(mSTP, mDTP)(PlaylistShow);
export default {
    PlaylistShow: connect(mSTP, mDTP)(PlaylistShow),
    PlaylistForm: connect(mSTP, mDTP)(PlaylistForm)
};