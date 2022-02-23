import { connect } from 'react-redux';
import PlaylistForm from './playlist_form';
import PlaylistShow from './playlist_show';
import {getCurrentUser} from '../../actions/session_actions';
import {getPlaysongs, getPlaylist, getPlaylists, newPlaylist, noMorePlaylist, updatePlaylist} from '../../actions/playlist_actions';

const mSTP = state => {
    return{
        user: state.users,
        errors: state.errors.session,
        playlists: state.playlists,
        playlist: state.playlist,
        playlistInfo: {title: 'test redux',
            description: 'test redux',
            genre: 'testing redux',
            artwork: '',}
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
        
        getUser: userId => dispatch(getCurrentUser(userId)),
        //getPlaysong: playlistId => dispatch(getPlaysongs(playlistId)),
    }
};
export default {
    PlaylistShow: connect(mSTP, mDTP)(PlaylistShow),
    PlaylistForm: connect(mSTP, mDTP)(PlaylistForm)
};