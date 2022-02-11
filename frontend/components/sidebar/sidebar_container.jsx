import { connect } from 'react-redux';
import SidebarComponent from './sidebar_component';
import { getPlaylist, getPlaylists, fetchPlaylists, deletePlaylist, newPlaylist } from '../../actions/playlist_actions';

const mSTP = state => {
    return{
        playlists: state.playlists, //state.entities.playlists ?
        currentUser: state.entities.users[state.session.currentUser]
    }
};
const mDTP = dispatch => {
    return{
        createPlaylist: formPlaylist => dispatch(newPlaylist(formPlaylist)),
        getPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
        getPlaylists: () => dispatch(getPlaylists()),
    }
};

export default connect(mSTP,mDTP)(SidebarComponent)