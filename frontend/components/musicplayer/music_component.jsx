import React from 'react';
import { Link } from 'react-router-dom';

class MusicComponent extends React.Component {
    constructor(props){
        super(props)

    }

    render() {
        const ifLoggedOut = () => (
            <div className="musicplayerdiv" id="bottomsignupsplash">
                <div className="righttext">
                    <p>PREVIEW OF CHARMTUNES</p>
                    <p>Sign up to get unlimited songs. No credit card needed.</p>
                </div>
                <Link className="splashsignupbottom" to="/signup">SIGN UP FREE</Link>
            </div>
        )
        const ifLoggedIn = () => (
            <div className="musicplayerdiv">
                <audio controls className="musicplayer">
                    <source src={window.mp3url} type="audio/mpeg"/>
                </audio>
                <p></p>
            </div>
        )
        return(
            this.props.currentUser ? ifLoggedIn() : ifLoggedOut()
            
        )
    }
}
export default MusicComponent;