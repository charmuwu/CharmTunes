import React from 'react';
import { Link } from 'react-router-dom';

class SidebarComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentUser: '',
            playlistId: 5,
        };
    }
    componentDidMount(){
        this.props.getPlaylists();
        debugger
    }
    render(){
        const {pathname} = this.props.location;
        if (pathname === "/login" || pathname === "/signup"){
            return null;
        }
        const ifLoggedOut = () => (
            <div className="sidebarcontainer">
                <div className="icon"></div>
                <Link className="sidebarLinks" to={'/'}>Home</Link>
                <div className="sidebarLinks">Your Library</div>
                <Link className="sidebarcreatepl" to={'/playlist'}>Create Playlist</Link>
                
            </div>
        )
        let playlists;
        if(this.props.playlists){
            playlists = Object.values(this.props.playlists)
        }
        const ifLoggedIn = () => (
            
            <div className="sidebarcontainer">
                <div className= "sbllinkcontainter">
                    <Link className="sidebarLinks" className="sblhome" to={'/'}>Home</Link>
                </div>
                <div className= "sbllinkcontainter">
                    <div className="sidebarLinks">Your Library</div>
                </div>
                <Link className="sidebarcreatepl" to={'/playlist'}>Create Playlist</Link>
                <div>
                    {/* {playlists = this.props.getPlaylists()} */}
                    {playlists.map( playlistObj =>(
                        <Link className="sidebarplaylists" key={playlistObj.id} to={`/playlist/${playlistObj.id}`}>
                            {playlistObj.title}
                        </Link>
                        
                    )) }
                </div>
                {/* get all the user's playlists and render them as components here. */}
                {/* why doesn't this show up?  */}
            </div>
        )
        return(
            <div>
                {console.log(this.props)}
                {/* it's not showing currentUser in props... */}
                {console.log(this.state)}
                {this.props.currentUser ? ifLoggedIn() : ifLoggedOut()}
            </div>
        )
    }
}

export default SidebarComponent;