import React from 'react';
import { Link } from 'react-router-dom';

class SidebarComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentUser: '',
            currentPlaylistId: '',
            // playlistCount: this.props.playlists,
            // dummyPlaylist ={title:'',description: '',genre:'',artwork:'',},
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onPlaylistClick = this.onPlaylistClick.bind(this)
    }
    componentDidMount(){
        this.props.getPlaylists();
    }
    handleSubmit(e) {
        // on click, create a default data playlist. then send it over to playlist form to be updated.
        e.preventDefault();
        // let currentPlaylist = e.currentTarget.currentPlaylist;
        let dummyPlaylist = {title: 'test playlist', 
                        description: 'test description', 
                        genre: 'test genre', 
                        artwork: ''};
        this.props.createPlaylist(dummyPlaylist)
        .then(() => this.props.history.push("/"));
    }
    onPlaylistClick(e) {
        // upon clicking a playlist, send that playlist to the playlistform component to be updated.

        // let currentPlaylist = document.getElementById(`playlistId${}`)
        let playlistId = e.currentTarget.id;
        this.props.receiveCurrentPlaylist()
        // let playlistElement = e.currentTarget;
        this.setState({currentPlaylistId: playlistId});
    }
    render(){
        const {pathname} = this.props.location;
        if (pathname === "/login" || pathname === "/signup"){
            return null;
        }
        const ifLoggedOut = () => (
            <div className="sidebarcontainer">
                <div className="icon"></div>

                <Link className="sidebarnavs" to={'/'}>
                    <svg className="houseicon">
                        <path fill="#afafaf" d="M9 14h6v7h5V7.8l-8-4.6-8 4.6V21h5v-7zm1 8H3V7.2L12 2l9 5.2V22h-7v-7h-4v7z"></path>
                    </svg>
                    Home
                </Link>

                <div>
                    {/* to divide */}
                </div>

                <Link className="sidebarnavs">
                    <svg className="houseicon">
                        <path fill="#afafaf" d="M14.617 3.893l-1.827.814 7.797 17.513 1.827-.813-7.797-17.514zM3 22h2V4H3v18zm5 0h2V4H8v18z"></path>
                    </svg>
                    Your Library
                </Link>

                <div>
                    {/* to divide */}
                </div>

                <Link className="sidebarnavs" to={`/playlist`}> {/* /playlist/${id} how are we going to do this? */}
                    {/* onClick event to send prop to playlistform for update */}
                    <div className="createplicon"></div>
                    Create Playlist

                </Link>

                <div className="dividersidebarpl">
                    {/* feels better to have than nothing on offline mode */}
                </div>
  
            </div>
        )
        let playlists;
        if(this.props.playlists){
            playlists = Object.values(this.props.playlists);
            // console.log(playlists.keys());
        }
        const ifLoggedIn = () => (
            
            <div className="sidebarcontainer">
                <div className="icon"></div>

                <Link className="sidebarnavs" to={'/'}>
                    <svg className="houseicon">
                        <path fill="#afafaf" d="M9 14h6v7h5V7.8l-8-4.6-8 4.6V21h5v-7zm1 8H3V7.2L12 2l9 5.2V22h-7v-7h-4v7z"></path>
                    </svg>
                    Home
                </Link>

                <div>
                    {/* to divide */}
                </div>

                <Link className="sidebarnavs" to={'/'}>
                    <svg className="houseicon">
                        <path fill="#afafaf" d="M14.617 3.893l-1.827.814 7.797 17.513 1.827-.813-7.797-17.514zM3 22h2V4H3v18zm5 0h2V4H8v18z"></path>
                    </svg>
                    Your Library
                </Link>

                <div>
                    {/* to divide */}
                </div>
                
                <Link className="sidebarnavs" to={'/playlist/'} onClick={this.handleSubmit}>
                    <div className="createplicon"></div>
                    Create Playlist
                </Link>
            
                <div className="dividersidebarpl">
                    {/* to divide the playlists from the sidebar navs */}
                </div>

                <div> {/* this displays all the playlists on the sidebar */}
                    {playlists.map( playlistObj =>(
                        <Link  key={playlistObj.id}
                            id={playlistObj.id}
                            className="sidebarplaylists" 
                            to={`/playlist/${playlistObj.id}`}
                            onClick={this.onPlaylistClick}
                            >
                                {playlistObj.title}
                        </Link>    
                    )) }
                </div>

            </div>
        )
        return(
            <div>
                {this.props.currentUser ? ifLoggedIn() : ifLoggedOut()}
            </div>
        )
    }
}

export default SidebarComponent;