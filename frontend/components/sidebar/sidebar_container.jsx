import { connect } from 'react-redux';
import SidebarComponent from './sidebar_component';
import { fetchPlaylist, fetchPlaylists, postPlaylist, deletePlaylist } from '../../utils/playlist_api_util';

const mSTP = state => {
    return{
        playlist: state.playlist,
        user: state.user
    }
};
const mDTP = dispatch => ({
    getPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
    getPlaylists: () => dispatch(fetchPlaylists()),
    newPlaylist: playlist => dispatch(postPlaylist(playlist))

});

export default connect(mSTP,mDTP)(SidebarComponent)