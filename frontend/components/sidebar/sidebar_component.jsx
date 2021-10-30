import React from 'react';
import { Link } from 'react-router-dom';

class SidebarComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const ifLoggedOut = () => (
            <div className="sidebarcontainer">
                <div className="icon"></div>
                <Link className="sidebarLinks" to={'/'}>Home</Link>
                <div className="sidebarLinks">Your Library</div>
                <Link className="sidebarcreatepl" to={'/playlist'}>Create Playlist</Link>
            </div>
        )
        const ifLoggedIn = () => (
            <div className="sidebarcontainer">
                <div className= "sbllinkcontainter">
                    <Link className="sidebarLinks" className="sblhome" to={'/'}>Home</Link>
                </div>
                <div className= "sbllinkcontainter">
                    <div className="sidebarLinks">Your Library</div>
                </div>
                <Link className="sidebarcreatepl" to={'/playlist'}>Create Playlist</Link>
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