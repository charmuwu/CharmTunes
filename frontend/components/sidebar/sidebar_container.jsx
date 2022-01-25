import { connect } from 'react-redux';
import SidebarComponent from './sidebar_component';
import { getPlaylist, getPlaylists, fetchPlaylists, postPlaylist, deletePlaylist } from '../../actions/playlist_actions';

const mSTP = state => {
    return{
        playlists: state.playlists,
        currentUser: state.entities.users[state.session.currentUser]
    }
};
const mDTP = dispatch => {
    return{
        getPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
        getPlaylists: () => dispatch(getPlaylists()),
        newPlaylist: playlist => dispatch(postPlaylist(playlist))
    }
};

export default connect(mSTP,mDTP)(SidebarComponent)