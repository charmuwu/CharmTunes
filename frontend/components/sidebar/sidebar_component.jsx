import React from 'react';
import { Link } from 'react-router-dom';

class SidebarComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const ifLoggedOut = () => (
            <div className="sidebarcontainer">
                <h1>Home</h1>
                <h1>Your Library</h1>
            </div>
        )
        const ifLoggedIn = () => (
            <div className="sidebarcontainer">
                <h1>Home</h1>
                <h1>Your Library</h1>
                <Link className="sidebarcreatepl" to="/playlist">Create Playlist</Link>
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