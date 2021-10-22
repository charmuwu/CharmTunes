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
                <div className="sidebarLinks">Home</div>
                <div className="sidebarLinks">Your Library</div>
            </div>
        )
        const ifLoggedIn = () => (
            <div className="sidebarcontainer">
                <div className= "sbllinkcontainter">
                    <div className="sidebarLinks" className="sblhome">Home</div>
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
                {this.props.currentUser ? ifLoggedIn() : ifLoggedOut()}
            </div>
        )
    }
}

export default SidebarComponent;