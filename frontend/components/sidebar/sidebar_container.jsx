import { connect } from 'react-redux';
import SidebarComponent from './sidebar_component';
import { fetchPlaylist, fetchPlaylists, postPlaylist, deletePlaylist } from '../../action/playlist_actions';

const mSTP = state => {
    return{
        playlist: state.playlist,
        currentUser: state.entities.users[state.session.currentUser]
    }
};
const mDTP = dispatch => ({
    getPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    newPlaylist: playlist => dispatch(postPlaylist(playlist))

});

export default connect(mSTP,mDTP)(SidebarComponent)