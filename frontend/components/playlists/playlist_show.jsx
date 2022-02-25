import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'My Playlist',
            description: '',
            genre: '',
            artwork: '',
            creator: '',
        };
        this.handlePLClickOpen = this.handlePLClickOpen.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(){
        let id = Number.parseInt(this.props.match.params.playlistObjId);
        this.props.deletePlaylist(id);
        //somehow force a rerender of sidebar once delete is committed!!!
    }
    handlePLClickOpen(){
        const modal = document.getElementById("playlistModal");
        const modalbg = document.getElementById("modalBG");
        modal.style.display = "block";
        modalbg.style.display = "block";
    }
    componentDidMount(){
        let id = Number.parseInt(this.props.match.params.playlistObjId);
       
        this.props.getPlaylist(id).then((data) =>
        this.props.getUser(data.playlist.creator_id).then ((userData) =>
        this.setState({title: data.playlist.title, 
            description: data.playlist.description, 
            genre: data.playlist.genre,
            artwork: data.playlist.artwork,
            creator: userData.user.username,
        })));
    }
    componentDidUpdate(prevProps){ //need to somehow rerender both sidebar and show once update is commited
        if (prevProps.match.params.playlistObjId !== this.props.match.params.playlistObjId) {
            let id = Number.parseInt(this.props.match.params.playlistObjId);

            this.props.getPlaylist(id).then((data) => 
            this.props.getUser(data.playlist.creator_id).then ((userData) =>
            this.setState({title: data.playlist.title, 
                description: data.playlist.description, 
                genre: data.playlist.genre,
                artwork: data.playlist.artwork,
                creator: userData.user.username,
            })));
        }
    }
    render() {

        return (
            <div className="playlistContainer">
                <div className={this.props.currentPlaylistId}>{this.props.currentPlaylistId}</div>
                <div className="plinfobar">
                    <div className="plartwork" onClick={this.handlePLClickOpen}>
                        <svg className="playlistartwork">
                            {/* <path d="M33.402 3.006L8.852 31.751l-2.337 12.61 12.09-4.281 24.552-28.746-9.755-8.328zM9.112 41.32l1.543-8.327 6.44 5.5-7.983 2.827zm9.418-4.231l-6.712-5.732L33.625 5.825l6.711 5.731L18.53 37.089z"></path> */}
                            <path fill="#afafaf" d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z"></path>
                        </svg>
                        {/* this.state.artwork inside image tag or something */}
                    </div>
                    <div className="pldetails">
                        <div className="pldetail1">
                            PLAYLIST
                        </div>
                        <div className="pldetailstitle" onClick={this.handlePLClickOpen}>
                            {this.state.title}
                        </div>
                        <div className="description">
                            {this.state.description}
                        </div>
                        <div className="pldetailscreator">
                            <div className="pldcreatorname">
                                {this.state.creator}
                            </div>
                            <div className="pldnumberofsongs">
                                {/* playlist song length 
                                get the list of songs using playsong action
                                */}
                            </div>
                            <div className="pldtotallength">
                                {/* total length of all songs together */}
                            </div>
                        </div>
                    </div>
                </div>
                
                <button onClick={this.handleDelete} to="/"> {/* delete doesn't properly go back to splash? */}
                    Delete
                </button>
            </div>
        );
    }
}
export default PlaylistShow;
